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

    // Extract the language from the cookie
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    // Use default language if no language is found in cookies
    if (!languageValue && window.__GOOGLE_TRANSLATION_CONFIG__) {
      languageValue = window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    // Set state values
    setCurrentLanguage(languageValue || "en"); // Fallback to English if undefined
    if (window.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(window.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Render nothing until currentLanguage and languageConfig are available
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang: string) => {
    if (lang !== currentLanguage) {
      setCurrentLanguage(lang); // Update state before reloading
      setCookie(null, COOKIE_NAME, `/auto/${lang}`, {
        path: "/", // Ensure cookie is available across the site
      });

      // Delay reload slightly to allow state to update
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  return (
    <div className="text-center notranslate ml-2 md:mr-4">
      <Select onValueChange={switchLanguage} value={currentLanguage}>
        <SelectTrigger className="w-[130px] capitalize rounded-lg mr-1 my-1">
          <SelectValue className="text-xs" placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent className="text-xs">
          {languageConfig.languages.map((ld: LanguageDescriptor) => (
            <SelectItem key={ld.name} value={ld.name} className="text-xs">
              {ld.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
