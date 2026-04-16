/**
 * Local webhook test script
 * Simulates a Sanity "document published" webhook call to your local API
 *
 * Usage:
 *   node scripts/test-webhook.mjs
 *   node scripts/test-webhook.mjs <documentId> <type>
 *
 * Examples:
 *   node scripts/test-webhook.mjs                          ← uses first blog doc found
 *   node scripts/test-webhook.mjs drafts.abc123 blog
 */

import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createClient } from "@sanity/client";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local
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
}

const LOCAL_URL = "http://localhost:3000/api/translate";
const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET || "";
const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3qbrvzvt";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// If doc ID passed as argument, use it
const argId = process.argv[2];
const argType = process.argv[3] || "blog";

async function getTestDocument() {
  if (argId) {
    return { _id: argId, _type: argType };
  }

  // Find the first published blog document from Sanity
  const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  });

  const docs = await client.fetch(
    `*[_type in ["blog","news","knowledgeHub"] && !(_id in path("drafts.**")) && language == null][0..2]{ _id, _type, title }`
  );

  if (!docs || docs.length === 0) {
    console.error("❌ No published blog/news/knowledgeHub documents found in Sanity.");
    console.log("   Try: node scripts/test-webhook.mjs <documentId> <type>");
    process.exit(1);
  }

  console.log("\nFound documents:");
  docs.forEach((d, i) => console.log(`  ${i + 1}. [${d._type}] ${d._id} — "${d.title}"`));
  console.log(`\nUsing: ${docs[0]._id}\n`);

  return docs[0];
}

async function main() {
  console.log("=".repeat(60));
  console.log("  Blockmaze Translation Webhook — Local Test");
  console.log("=".repeat(60));
  console.log(`\nTarget: ${LOCAL_URL}`);
  console.log(`Secret: ${WEBHOOK_SECRET ? "✓ set" : "⚠ not set"}\n`);

  const doc = await getTestDocument();

  const payload = {
    _id: doc._id,
    _type: doc._type,
  };

  console.log(`Sending webhook for: [${doc._type}] ${doc._id}`);
  console.log("Payload:", JSON.stringify(payload, null, 2));
  console.log("\nCalling API...\n");

  const start = Date.now();

  try {
    const res = await fetch(LOCAL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "sanity-webhook-signature": WEBHOOK_SECRET,
      },
      body: JSON.stringify(payload),
    });

    const elapsed = Date.now() - start;
    const data = await res.json();

    console.log(`Status: ${res.status} (${elapsed}ms)`);
    console.log("Response:", JSON.stringify(data, null, 2));

    if (res.ok && data.success) {
      console.log("\n✅ Success! Check Sanity Studio for translated documents.");
      console.log("   Look for documents with IDs ending in __i18n_ar, __i18n_es, __i18n_fr");
    } else {
      console.log("\n❌ Something went wrong. See response above.");
    }
  } catch (err) {
    console.error("\n❌ Request failed:", err.message);
    console.log("   Is your dev server running? (npm run dev)");
  }
}

main();
