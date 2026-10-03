import srJSON from "../../public/locales/sr.json";
import enJSON from "../../public/locales/en.json";
import ruJSON from "../../public/locales/ru.json";
import zhJSON from "../../public/locales/zh.json";

const LOCALES = {
  sr: srJSON,
  en: enJSON,
  ru: ruJSON,
  zh: zhJSON,
};

class TranslationManager extends EventTarget {
  constructor() {
    super();
    this.supportedLangs = ["sr", "en", "ru", "zh"];
    this.defaultLang = "sr";
    this.fallbackLang = "sr";

    this.currentLang = this.defaultLang;
    this.translations = {};
    this.fallbackTranslations = {};
  }

  getBaseUrl() {
    const base = import.meta.env.BASE_URL || "/";
    return base.endsWith("/") ? base : `${base}/`;
  }

  async init() {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const supportedSubLangs = ["en", "ru", "zh"];

    // Detect language from URL path (e.g. /woodland-estate/en/)
    const urlLang = pathSegments.find((segment) =>
      supportedSubLangs.includes(segment),
    );

    this.currentLang = urlLang || this.defaultLang;

    // Load bundled locale objects directly from memory
    this.translations = LOCALES[this.currentLang] || LOCALES[this.defaultLang];
    this.fallbackTranslations = LOCALES[this.fallbackLang];

    this.translateDOM();
    this.dispatchEvent(
      new CustomEvent("languageLoaded", { detail: this.currentLang }),
    );
  }

  t(key) {
    let val = this.getNestedValue(this.translations, key);
    if (val) return val;

    val = this.getNestedValue(this.fallbackTranslations, key);
    if (val) return val;

    if (import.meta.env.DEV) {
      console.warn(
        `[i18n Dev Warning] Missing key: "${key}" in "${this.currentLang}"`,
      );
      return `[MISSING: ${key}]`;
    }

    return key.split(".").pop();
  }

  getNestedValue(obj, path) {
    if (!obj || !path) return null;
    return path.split(".").reduce((o, i) => (o ? o[i] : null), obj);
  }

  translateDOM() {
    // 1. Sync HTML root lang
    if (this.currentLang) {
      document.documentElement.lang = this.currentLang;
    }

    // 2. Text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = this.t(key);
    });

    // 3. Input placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", this.t(key));
    });

    // 4. Accessibility aria-labels
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", this.t(key));
    });

    // 5. Image alt tags
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      el.setAttribute("alt", this.t(key));
    });

    // 6. Tab Title
    const pageTitle = this.t("meta.title");
    if (pageTitle && !pageTitle.startsWith("[MISSING")) {
      document.title = pageTitle;
    }

    // 7. Meta Description
    const metaDesc = this.t("meta.description");
    if (metaDesc && !metaDesc.startsWith("[MISSING")) {
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) {
        descEl.setAttribute("content", metaDesc);
      }
    }
  }

  switchLanguage(targetLang) {
    if (targetLang === this.currentLang) return;

    const base = this.getBaseUrl();
    let targetPath = base;

    if (targetLang !== this.defaultLang) {
      targetPath = `${base}${targetLang}/`;
    }

    window.location.href = targetPath;
  }
}

export const i18n = new TranslationManager();
