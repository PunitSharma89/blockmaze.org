import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const SUPPORTED_LOCALES = ["en", "ar", "es", "fr"];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = SUPPORTED_LOCALES.includes(cookieLocale ?? "") ? (cookieLocale as string) : "en";

  let messages = {};
  try {
    messages = (await import(`./messages/${locale}.json`)).default;
  } catch {
    messages = (await import("./messages/en.json")).default;
  }

  return { locale, messages };
});
