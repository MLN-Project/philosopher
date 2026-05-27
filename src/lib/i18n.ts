export const LANGUAGE_STORAGE_KEY = "philosopher-language";

export const languages = ["en", "vi"] as const;

export type Language = (typeof languages)[number];

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && languages.includes(value as Language);
}

export function languageName(language: Language) {
  return language === "vi" ? "Vietnamese" : "English";
}

export function languageShortLabel(language: Language) {
  return language === "vi" ? "VN" : "EN";
}
