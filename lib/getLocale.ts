import { cookies } from "next/headers";

const SUPPORTED_LOCALES = ["en", "ar", "es", "fr"];

export async function getLocale(): Promise<string> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value;
  return SUPPORTED_LOCALES.includes(locale ?? "") ? (locale as string) : "en";
}
