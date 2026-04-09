import { createClient } from "next-sanity";
import type { QueryParams } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Only create a real client when a valid projectId is configured.
// This prevents a runtime crash when env vars are not yet set.
export const client =
  projectId && /^[a-z0-9-]+$/.test(projectId)
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2024-01-01",
        useCdn: false,
        token: process.env.SANITY_API_TOKEN,
      })
    : null;

export async function sanityFetch<T>(
  query: string,
  params?: QueryParams
): Promise<T | null> {
  if (!client) return null;
  return client.fetch<T>(query, params ?? {});
}
