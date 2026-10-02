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

  // Safely constructs absolute URLs taking Vite's BASE_URL (e.g. /woodland-estate/) into account
  getBaseUrl() {
    const base = import.meta.env.BASE_URL || "/";
    return base.endsWith("/") ? base : `${base}/`;
  }

  // Load active language dictionary + fallback dictionary
  async init() {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const supportedSubLangs = ["en", "ru", "zh"];

    // Find if any segment matches our non-default subfolder languages
    const urlLang = pathSegments.find((segment) =>
      supportedSubLangs.includes(segment),
    );

    if (urlLang) {
      this.currentLang = urlLang;
    } else {
      this.currentLang = this.defaultLang;
    }

    const base = this.getBaseUrl();

    try {
      // 1. Fetch active language JSON
      const res = await fetch(`${base}locales/${this.currentLang}.json`);
      if (res.ok) {
        this.translations = await res.json();
      }

      // 2. Fetch fallback language JSON (sr.json) if not already active
      if (this.currentLang !== this.fallbackLang) {
        const fallbackRes = await fetch(
          `${base}locales/${this.fallbackLang}.json`,
        );
        if (fallbackRes.ok) {
          this.fallbackTranslations = await fallbackRes.json();
        }
      }
    } catch (err) {
      console.error("[i18n] Failed loading locale JSON:", err);
    }

    this.translateDOM();
    this.dispatchEvent(
      new CustomEvent("languageLoaded", { detail: this.currentLang }),
    );
  }

  // Key lookup helper
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
    // 1. Translate all body elements marked with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = this.t(key);
    });

    // 2. Dynamically update browser tab title if meta key exists
    const pageTitle = this.t("meta.title");
    if (pageTitle && !pageTitle.startsWith("[MISSING")) {
      document.title = pageTitle;
    }
  }

  // Path redirection helper for language switching
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
