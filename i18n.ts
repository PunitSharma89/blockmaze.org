import { getRequestConfig } from "next-intl/server";

// This file is kept for next-intl compatibility.
// Locale detection is handled via NEXT_LOCALE cookie in app/layout.tsx.
export default getRequestConfig(async () => {
  return {
    locale: "en",
    messages: (await import("./messages/en.json")).default,
  };
});
