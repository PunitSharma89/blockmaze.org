import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "3qbrvzvt",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "skEjtFLgRovPLJkNvJJlxGQDYNHck4wCdC25KFvZYK7AcXAbx9sr2ZuO6cAOxvUA9vBcHyQAHUsPSOtP5kL4dMahDKx9gFRU9CUrMgoMf0CoCEsepyYaruEDh9aaCx9puI7nDp3HaIsmwZreA85krBAcczy6sdCGQWr4i4n9qeJ2gwanX1vI",
  useCdn: false,
});

async function publishAllDrafts() {
  // Get all draft blog documents
  const drafts = await client.fetch(`*[_id in path("drafts.**")]{ _id, title, _type }`);

  if (drafts.length === 0) {
    console.log("No drafts found.");
    return;
  }

  console.log(`Found ${drafts.length} draft(s):`);

  for (const draft of drafts) {
    const publishedId = draft._id.replace("drafts.", "");
    console.log(`Publishing: "${draft.title}" (${publishedId})`);

    try {
      const fullDraft = await client.fetch(`*[_id == $id][0]`, { id: draft._id });
      await client
        .transaction()
        .createOrReplace({ ...fullDraft, _id: publishedId })
        .delete(draft._id)
        .commit();
      console.log(`✓ Published: ${draft.title}`);
    } catch (err) {
      console.error(`✗ Failed: ${draft.title}`, err.message);
    }
  }

  console.log("Done!");
}

publishAllDrafts();
