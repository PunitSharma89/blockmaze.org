/**
 * Sanity Webhook → Auto-Translation Route
 *
 * Triggered by Sanity when a blog, news, or knowledgeHub document is published.
 * For each supported language (ar, es, fr):
 *   1. Fetches the English source document
 *   2. Translates all text fields via OpenAI GPT-4o
 *   3. Saves the translated document back to Sanity
 *   4. Triggers Next.js revalidation
 *
 * Setup in Sanity dashboard:
 *   URL: https://yourdomain.com/api/translate
 *   Trigger: on publish
 *   Secret: set SANITY_WEBHOOK_SECRET in .env.local
 */

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import {
  translateStrings,
  translatePortableTextBlocks,
  translateObject,
  translateHtml,
  type SupportedLocale,
} from "@/lib/openaiTranslate";

const SUPPORTED_LOCALES: SupportedLocale[] = ["ar", "es", "fr"];

const TRANSLATABLE_TYPES = [
  "blog", "news", "knowledgeHub", "homePage", "siteSettings",
  "governancePage", "rfpPage", "daoPage", "swapPage",
  "validatorPage", "delegatorPage", "tokenomicsPage",
  "aboutPage", "contactPage", "technicalPage", "legalPage",
];

const sanityWriteClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export async function POST(req: NextRequest) {
  try {
    // Validate webhook secret
    const secret = req.headers.get("sanity-webhook-signature") ??
      req.nextUrl.searchParams.get("secret");

    if (
      process.env.SANITY_WEBHOOK_SECRET &&
      secret !== process.env.SANITY_WEBHOOK_SECRET
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { _id, _type } = body;

    // Only process translatable document types
    if (!TRANSLATABLE_TYPES.includes(_type)) {
      return NextResponse.json({
        message: `Skipped — type '${_type}' is not configured for translation`,
      });
    }

    // Only process English (source) documents — skip already-translated docs
    if (body.language && body.language !== "en") {
      return NextResponse.json({
        message: "Skipped — not the English source document",
      });
    }

    console.log(`[translate] Processing ${_type} document: ${_id}`);

    // Fetch the full English document from Sanity
    const sourceDoc = await sanityWriteClient.getDocument(_id);
    if (!sourceDoc) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    // Translate into each target language
    const results: Record<string, string> = {};
    for (const locale of SUPPORTED_LOCALES) {
      try {
        const translatedDoc = await buildTranslatedDocument(
          sourceDoc,
          _type,
          locale
        );

        // The i18n plugin uses document IDs like: <originalId>__i18n_<locale>
        const translatedId = `${_id}__i18n_${locale}`;

        await sanityWriteClient
          .transaction()
          .createOrReplace({
            ...translatedDoc,
            _id: translatedId,
            _type,
            language: locale,
          })
          .commit();

        results[locale] = "success";
        console.log(`[translate] ✓ ${locale} translation saved: ${translatedId}`);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`[translate] ✗ Failed for ${locale}:`, msg);
        results[locale] = `error: ${msg}`;
      }
    }

    // Revalidate relevant Next.js pages
    await revalidatePages(_type);

    return NextResponse.json({
      success: true,
      documentId: _id,
      type: _type,
      translations: results,
    });
  } catch (err) {
    console.error("[translate] Webhook error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/** Build a fully translated document based on its type */
async function buildTranslatedDocument(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  doc: Record<string, any>,
  type: string,
  locale: SupportedLocale
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Record<string, any>> {
  const translated = { ...doc };

  if (type === "blog") {
    // Always preserve the original English slug — URL must never change
    translated.slug = doc.slug;

    // Translate plain text fields
    const [title, excerpt] = await translateStrings(
      [doc.title ?? "", doc.excerpt ?? ""],
      locale
    );
    translated.title = title;
    translated.excerpt = excerpt;

    // Translate Portable Text body
    if (Array.isArray(doc.body) && doc.body.length > 0) {
      translated.body = await translatePortableTextBlocks(doc.body, locale);
    }

    // Translate rawHtml field — uses HTML-aware translation that preserves tags
    if (doc.rawHtml) {
      translated.rawHtml = await translateHtml(doc.rawHtml, locale);
    }

    // Translate SEO fields
    if (doc.seo) {
      const seoStrings: string[] = [];
      const seoKeys: string[] = [];
      if (doc.seo.metaTitle) { seoStrings.push(doc.seo.metaTitle); seoKeys.push("metaTitle"); }
      if (doc.seo.metaDescription) { seoStrings.push(doc.seo.metaDescription); seoKeys.push("metaDescription"); }
      if (seoStrings.length > 0) {
        const translatedSeo = await translateStrings(seoStrings, locale);
        translated.seo = { ...doc.seo };
        seoKeys.forEach((key, i) => { translated.seo[key] = translatedSeo[i]; });
      }
    }
  }

  if (type === "news") {
    const [title, excerpt] = await translateStrings(
      [doc.title ?? "", doc.excerpt ?? ""],
      locale
    );
    translated.title = title;
    translated.excerpt = excerpt;

    if (Array.isArray(doc.body) && doc.body.length > 0) {
      translated.body = await translatePortableTextBlocks(doc.body, locale);
    }
  }

  if (type === "knowledgeHub") {
    const stringsToTranslate = [doc.title ?? "", doc.excerpt ?? ""];
    const bulletPoints: string[] = Array.isArray(doc.bulletPoints)
      ? doc.bulletPoints
      : [];

    const allStrings = [...stringsToTranslate, ...bulletPoints];
    const translatedAll = await translateStrings(allStrings, locale);

    translated.title = translatedAll[0];
    translated.excerpt = translatedAll[1];
    if (bulletPoints.length > 0) {
      translated.bulletPoints = translatedAll.slice(2);
    }
  }

  if (type === "homePage") {
    // Recursively translate all text fields in the nested home page document
    const translatedDoc = await translateObject(doc, locale);
    return translatedDoc;
  }

  if (type === "siteSettings") {
    const translatedDoc = await translateObject(doc, locale);
    return translatedDoc;
  }

  // All other page types — recursively translate all text fields
  const PAGE_TYPES = [
    "governancePage", "rfpPage", "daoPage", "swapPage",
    "validatorPage", "delegatorPage", "tokenomicsPage",
    "aboutPage", "contactPage", "technicalPage", "legalPage",
  ];
  if (PAGE_TYPES.includes(type)) {
    const translatedDoc = await translateObject(doc, locale);
    return translatedDoc;
  }

  return translated;
}

/** Trigger Next.js on-demand revalidation for affected pages */
async function revalidatePages(type: string) {
  const pathsToRevalidate: string[] = [];

  if (type === "blog") {
    pathsToRevalidate.push("/blogs", "/en/blogs", "/ar/blogs", "/es/blogs", "/fr/blogs");
  }
  if (type === "news") {
    pathsToRevalidate.push("/news", "/en/news", "/ar/news", "/es/news", "/fr/news");
  }
  if (type === "knowledgeHub") {
    pathsToRevalidate.push(
      "/knowledge-hub", "/en/knowledge-hub",
      "/ar/knowledge-hub", "/es/knowledge-hub", "/fr/knowledge-hub"
    );
  }
  if (type === "siteSettings") {
    // Header/footer appear on every page — revalidate the homepage to bust the cache
    pathsToRevalidate.push("/");
  }

  for (const path of pathsToRevalidate) {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=${encodeURIComponent(path)}&secret=${process.env.REVALIDATION_SECRET}`,
        { method: "POST" }
      );
    } catch {
      // Non-critical — pages will revalidate on next ISR cycle anyway
    }
  }
}
