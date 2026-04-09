import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "3qbrvzvt",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "skEjtFLgRovPLJkNvJJlxGQDYNHck4wCdC25KFvZYK7AcXAbx9sr2ZuO6cAOxvUA9vBcHyQAHUsPSOtP5kL4dMahDKx9gFRU9CUrMgoMf0CoCEsepyYaruEDh9aaCx9puI7nDp3HaIsmwZreA85krBAcczy6sdCGQWr4i4n9qeJ2gwanX1vI",
  useCdn: false,
});

async function migrate() {
  // Fetch the old protocolPage document
  const old = await client.fetch(`*[_type == "protocolPage"][0]`);

  if (!old) {
    console.log("No protocolPage document found.");
    return;
  }

  console.log(`Found: "${old.title}" — migrating to technicalPage...`);

  // Build new technicalPage document preserving all sections and rawHtml
  const newDoc = {
    _type: "technicalPage",
    _id: "technical-page-blockmaze-protocol",
    title: old.title,
    slug: { _type: "slug", current: "blockmaze-protocol" },
    sections: (old.sections || []).map((s) => ({
      _type: "section",
      _key: s._key || Math.random().toString(36).slice(2),
      sectionId: s.sectionId,
      heading: s.heading,
      rawHtml: s.rawHtml || "",
    })),
  };

  try {
    await client.createOrReplace(newDoc);
    console.log("✓ Migrated to technicalPage (slug: blockmaze-protocol)");

    // Delete old protocolPage document
    await client.delete(old._id);
    console.log("✓ Deleted old protocolPage document");
  } catch (err) {
    console.error("✗ Failed:", err.message);
  }

  console.log("Done!");
}

migrate();
