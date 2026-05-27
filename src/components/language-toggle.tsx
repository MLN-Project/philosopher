"use client";

import { useLanguage } from "@/components/language-provider";
import { languageName, languages, languageShortLabel } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle" data-language={language} aria-label="Language">
      {languages.map((option) => (
        <button
          aria-label={languageShortLabel(option)}
          aria-pressed={language === option}
          className={language === option ? "is-active" : undefined}
          key={option}
          onClick={() => setLanguage(option)}
          title={languageName(option)}
          type="button"
        >
          {languageShortLabel(option)}
        </button>
      ))}
    </div>
  );
}
