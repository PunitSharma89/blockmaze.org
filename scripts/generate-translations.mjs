/**
 * Run once to generate ar.json, es.json, fr.json from en.json
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-translations.mjs
 *
 * Or add to package.json scripts:
 *   "translate": "node scripts/generate-translations.mjs"
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import OpenAI from "openai";

const __dirname = dirname(fileURLToPath(import.meta.url));
const messagesDir = join(__dirname, "../messages");

// Auto-load .env.local so no need to pass API key manually
const envPath = join(__dirname, "../.env.local");
if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
  console.log("✓ Loaded .env.local");
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const LOCALES = [
  { id: "ar", name: "Arabic" },
  { id: "es", name: "Spanish" },
  { id: "fr", name: "French" },
];

// Proper nouns to never translate
const DO_NOT_TRANSLATE = ["Blockmaze", "BMZ", "Layer-0", "RWA", "DAO", "DeFi", "NFT", "Layer 0"];

async function translateJson(obj, targetLanguage) {
  // Flatten all leaf string values
  const entries = [];
  function flatten(o, prefix = "") {
    for (const [key, val] of Object.entries(o)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (typeof val === "string") {
        entries.push({ path, value: val });
      } else if (typeof val === "object" && val !== null) {
        flatten(val, path);
      }
    }
  }
  flatten(obj);

  // Translate in batches of 50
  const BATCH_SIZE = 50;
  const translatedEntries = [];

  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    const numbered = batch.map((e, idx) => `${idx + 1}. ${e.value}`).join("\n");

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content: `You are a professional translator. Translate the following numbered list to ${targetLanguage}.
Rules:
- Return ONLY the translated numbered list in "1. translation" format
- Keep the same count of items
- Do NOT translate these proper nouns: ${DO_NOT_TRANSLATE.join(", ")}
- Preserve any special characters like {}, [], etc.`,
        },
        { role: "user", content: numbered },
      ],
    });

    const raw = response.choices[0]?.message?.content ?? "";
    const lines = raw.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
    const translated = lines.map((l) => l.replace(/^\d+\.\s*/, "").trim());

    if (translated.length !== batch.length) {
      console.warn(`Batch ${i / BATCH_SIZE + 1}: count mismatch — using originals`);
      translatedEntries.push(...batch.map((e) => e.value));
    } else {
      translatedEntries.push(...translated);
    }
  }

  // Rebuild the nested object
  function setPath(obj, path, value) {
    const keys = path.split(".");
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
  }

  const result = {};
  entries.forEach((entry, idx) => {
    setPath(result, entry.path, translatedEntries[idx] ?? entry.value);
  });

  return result;
}

async function main() {
  const enJson = JSON.parse(readFileSync(join(messagesDir, "en.json"), "utf-8"));

  for (const locale of LOCALES) {
    console.log(`\nTranslating to ${locale.name}...`);
    try {
      const translated = await translateJson(enJson, locale.name);
      writeFileSync(
        join(messagesDir, `${locale.id}.json`),
        JSON.stringify(translated, null, 2),
        "utf-8"
      );
      console.log(`✓ ${locale.id}.json created`);
    } catch (err) {
      console.error(`✗ Failed for ${locale.id}:`, err.message);
    }
  }

  console.log("\nDone!");
}

main();
