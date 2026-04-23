// Uses unofficial Google Translate API (no key needed)
const SANITY_PROJECT = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const SANITY_TOKEN = process.env.SANITY_API_TOKEN;
if (!SANITY_TOKEN) { console.error("SANITY_API_TOKEN env var is required"); process.exit(1); }

const LANG_MAP = { ar: "ar", es: "es", fr: "fr" };
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function googleTranslate(text, targetLang, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      // Response is [[["translated","original",...],...],...]
      const translated = data[0].map(chunk => chunk[0]).join("");
      return translated;
    } catch (err) {
      if (i < retries - 1) {
        console.log(`    Retry ${i+1}...`);
        await sleep(2000);
      } else throw err;
    }
  }
}

// Translate HTML by extracting text nodes, translating, then reinserting
// Simple approach: translate the whole HTML as text (Google handles HTML well)
async function googleTranslateHtml(html, targetLang) {
  // Google Translate handles HTML - use format=html
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(html)}`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data[0].map(chunk => chunk[0]).join("");
}

async function sanityQuery(query) {
  const r = await fetch(`https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`, {
    headers: { Authorization: `Bearer ${SANITY_TOKEN}` }
  });
  return (await r.json()).result;
}

async function sanityPatch(id, set) {
  const r = await fetch(`https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/data/mutate/${SANITY_DATASET}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${SANITY_TOKEN}` },
    body: JSON.stringify({ mutations: [{ patch: { id, set } }] })
  });
  return r.json();
}

const blogs = await sanityQuery(
  `*[_type == "blog" && !(_id in path("drafts.**")) && coalesce(language, "en") == "en"] | order(publishedAt asc) { _id, title, excerpt, rawHtml, slug }`
);

console.log(`Found ${blogs.length} blogs. Using Google Translate (free, no quota).`);

for (const blog of blogs) {
  console.log(`\n[${blog._id.substring(0,8)}] ${blog.title.substring(0, 65)}`);

  for (const lang of ["ar", "es", "fr"]) {
    const docId = `${blog._id}__i18n_${lang}`;
    const mockPrefix = `[${lang.toUpperCase()}]`;

    const currentTitle = await sanityQuery(`*[_id == "${docId}"][0].title`);
    if (currentTitle && !currentTitle.startsWith(mockPrefix)) {
      console.log(`  [${lang}] already OK — skip`);
      continue;
    }

    console.log(`  [${lang}] translating title...`);
    try {
      const title = await googleTranslate(blog.title, lang);
      await sleep(1000);
      const excerpt = await googleTranslate(blog.excerpt ?? "", lang);
      await sleep(1000);
      console.log(`    => ${title.substring(0, 60)}`);

      const set = { title, excerpt };

      if (blog.rawHtml) {
        console.log(`  [${lang}] translating rawHtml (${Math.round(blog.rawHtml.length/1024)}KB)...`);
        // Split into ~2KB chunks to avoid URL length limits
        const chunkSize = 2000;
        const chunks = [];
        for (let i = 0; i < blog.rawHtml.length; i += chunkSize) {
          chunks.push(blog.rawHtml.slice(i, i + chunkSize));
        }
        const translatedChunks = [];
        for (const chunk of chunks) {
          const t = await googleTranslate(chunk, lang);
          translatedChunks.push(t);
          await sleep(500);
        }
        set.rawHtml = translatedChunks.join("");
      }

      const result = await sanityPatch(docId, set);
      console.log(`  [${lang}] patched: ${result.results?.[0]?.operation ?? JSON.stringify(result.error)}`);
      await sleep(1500);
    } catch (err) {
      console.error(`  [${lang}] FAILED:`, err.message);
    }
  }
}

console.log("\nAll done!");
