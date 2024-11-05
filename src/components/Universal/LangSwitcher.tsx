"use client";
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Adjust the import path as necessary

const COOKIE_NAME = "googtrans";

interface LanguageDescriptor {
  name: string;
  title: string;
}

interface GoogleTranslationConfig {
  languages: LanguageDescriptor[];
  defaultLanguage: string;
}

declare global {
  interface Window {
    __GOOGLE_TRANSLATION_CONFIG__: GoogleTranslationConfig;
  }
}

const LanguageSwitcher: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [languageConfig, setLanguageConfig] = useState<GoogleTranslationConfig | null>(null);

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue = "";

    // Get the language from the cookie
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    // If no language value is found in cookies, set the default language
    if (!languageValue && window.__GOOGLE_TRANSLATION_CONFIG__) {
      languageValue = window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    // Set the current language if found
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }

    // Set language config if available
    if (window.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(window.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Render nothing until current language and language config are available
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang: string) => {
    setCookie(null, COOKIE_NAME, "/auto/" + lang, {
      path: '/', // Ensure cookie is available across the site
    });
    window.location.reload(); // Reload the page to apply the new language
  };

  return (
    <div className="text-center notranslate mx-1">
      <Select onValueChange={switchLanguage} defaultValue={currentLanguage}>
        <SelectTrigger className="w-[110px]">
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent>
          {languageConfig.languages.map((ld: LanguageDescriptor) => (
            <SelectItem key={ld.name} value={ld.name}>
              {ld.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
