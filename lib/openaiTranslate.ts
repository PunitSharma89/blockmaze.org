/**
 * OpenAI GPT-4o Translation Helper
 *
 * When OPENAI_API_KEY is not set, runs in MOCK mode:
 *   - Prefixes strings with [AR], [ES], [FR]
 *   - Lets you test the full webhook → Sanity flow without an API key
 *
 * translateStrings            — translates an array of plain strings
 * translatePortableTextBlocks — translates a full Portable Text array
 */

import {
  extractSpanTexts,
  reinsertTranslations,
} from "./translatePortableText";

export type SupportedLocale = "ar" | "es" | "fr";

const LANGUAGE_NAMES: Record<SupportedLocale, string> = {
  ar: "Arabic",
  es: "Spanish",
  fr: "French",
};

const MOCK_PREFIXES: Record<SupportedLocale, string> = {
  ar: "[AR] ",
  es: "[ES] ",
  fr: "[FR] ",
};

// Force mock mode via env var, or when no key is set / key is placeholder
const isMockMode =
  process.env.TRANSLATION_MOCK_MODE === "true" ||
  !process.env.OPENAI_API_KEY ||
  process.env.OPENAI_API_KEY.startsWith("sk-...");

/** Mock translation — just prefixes strings for testing */
function mockTranslate(strings: string[], locale: SupportedLocale): string[] {
  const prefix = MOCK_PREFIXES[locale];
  console.log(
    `[openaiTranslate] MOCK MODE — prefixing ${strings.length} strings with "${prefix}"`,
  );
  return strings.map((s) => (s ? `${prefix}${s}` : s));
}

/**
 * Translate an array of plain text strings.
 * Uses OpenAI GPT-4o if API key is present, otherwise mock mode.
 */
export async function translateStrings(
  strings: string[],
  targetLocale: SupportedLocale,
): Promise<string[]> {
  if (strings.length === 0) return [];

  if (isMockMode) {
    return mockTranslate(strings, targetLocale);
  }

  // Real OpenAI translation
  const { default: OpenAI } = await import("openai");
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const language = LANGUAGE_NAMES[targetLocale];
  const numbered = strings.map((s, i) => `${i + 1}. ${s}`).join("\n");

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    temperature: 0.2,
    messages: [
      {
        role: "system",
        content: `You are a professional translator specializing in blockchain, finance, and legal terminology.
Translate the following numbered list of strings to ${language}.
Rules:
- Return ONLY the translated numbered list, same format: "1. translation"
- Keep the same number of items
- Preserve any HTML tags, markdown, or special characters exactly
- Do NOT translate proper nouns: Blockmaze, BMZ, Layer-0, RWA, DAO, DeFi, NFT
- Maintain formal/professional tone throughout`,
      },
      {
        role: "user",
        content: numbered,
      },
    ],
  });

  const raw = response.choices[0]?.message?.content ?? "";
  const lines = raw.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
  const translated = lines.map((l) => l.replace(/^\d+\.\s*/, "").trim());

  if (translated.length !== strings.length) {
    console.warn(
      `[openaiTranslate] Count mismatch for ${language}: expected ${strings.length}, got ${translated.length}. Falling back to originals.`,
    );
    return strings;
  }

  return translated;
}

/**
 * Translate a full Portable Text array.
 * Extracts span texts, translates them, reinserts into the original structure.
 */
export async function translatePortableTextBlocks(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: any[],
  targetLocale: SupportedLocale,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any[]> {
  if (!Array.isArray(blocks) || blocks.length === 0) return blocks;

  const spanTexts = extractSpanTexts(blocks);
  if (spanTexts.length === 0) return blocks;

  const translated = await translateStrings(spanTexts, targetLocale);
  return reinsertTranslations(blocks, translated);
}

/**
 * Recursively translate all string/text values inside a nested Sanity document.
 * Skips: _id, _type, _key, _rev, _createdAt, _updatedAt, language, href, icon, imagePath, position
 * Preserves structure, arrays, nested objects.
 */
const SKIP_KEYS = new Set([
  "_id",
  "_type",
  "_key",
  "_rev",
  "_createdAt",
  "_updatedAt",
  "language",
  "href",
  "icon",
  "imagePath",
  "position",
  "buttonHref",
  "button1Href",
  "button2Href",
  "link",
  "photo", // team member image paths
  "linkedin", // URLs
]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<string, any>;

export async function translateObject(
  obj: AnyObject,
  targetLocale: SupportedLocale,
): Promise<AnyObject> {
  // Collect all leaf string values with their paths
  const paths: string[] = [];
  const values: string[] = [];

  function collect(current: unknown, path: string) {
    if (typeof current === "string" && current.trim()) {
      paths.push(path);
      values.push(current);
    } else if (Array.isArray(current)) {
      current.forEach((item, i) => collect(item, `${path}[${i}]`));
    } else if (current !== null && typeof current === "object") {
      for (const [key, val] of Object.entries(current as AnyObject)) {
        if (SKIP_KEYS.has(key)) continue;
        collect(val, path ? `${path}.${key}` : key);
      }
    }
  }

  collect(obj, "");

  if (values.length === 0) return obj;

  // Batch to avoid count mismatches with large documents (home page has 80-100+ strings)
  const BATCH_SIZE = 30;
  const translated: string[] = [];
  for (let i = 0; i < values.length; i += BATCH_SIZE) {
    const batch = values.slice(i, i + BATCH_SIZE);
    const batchTranslated = await translateStrings(batch, targetLocale);
    translated.push(...batchTranslated);
  }

  // Deep clone and reinsert
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function deepClone(val: unknown): any {
    if (Array.isArray(val)) return val.map(deepClone);
    if (val !== null && typeof val === "object")
      return Object.fromEntries(
        Object.entries(val as AnyObject).map(([k, v]) => [k, deepClone(v)]),
      );
    return val;
  }

  const result = deepClone(obj) as AnyObject;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setPath(target: AnyObject, pathStr: string, value: any) {
    const parts = pathStr
      .replace(/\[(\d+)\]/g, ".$1")
      .split(".")
      .filter(Boolean);
    let cur: AnyObject = target;
    for (let i = 0; i < parts.length - 1; i++) {
      cur = cur[parts[i]] as AnyObject;
    }
    cur[parts[parts.length - 1]] = value;
  }

  paths.forEach((p, i) => {
    if (translated[i] !== undefined) setPath(result, p, translated[i]);
  });

  return result;
}
