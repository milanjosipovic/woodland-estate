class TranslationManager extends EventTarget {
  constructor() {
    super();
    this.supportedLangs = ["sr", "en", "ru", "zh"];
    this.defaultLang = "sr"; // Root path '/' serves Serbian
    this.fallbackLang = "sr"; // Fallback language if keys are missing

    this.currentLang = this.detectLanguageFromPath();
    this.translations = {};
    this.fallbackTranslations = {};
  }

  // Extract language from URL path (/en/ -> 'en', / -> 'sr')
  detectLanguageFromPath() {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const firstSegment = pathSegments[0];

    if (firstSegment && this.supportedLangs.includes(firstSegment)) {
      return firstSegment;
    }
    return this.defaultLang; // Default to 'sr' for root '/'
  }

  // Load active language dictionary + fallback dictionary
  async init() {
    // Extract language code from URL path (e.g., /woodland-estate/en/ -> "en")
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const supportedLangs = ["en", "ru", "zh"];

    const urlLang = pathSegments.find((segment) =>
      supportedLangs.includes(segment),
    );

    if (urlLang) {
      this.currentLang = urlLang;
    } else {
      this.currentLang = this.defaultLang; // "sr"
    }

    await this.loadTranslations(this.currentLang);
    this.translateDOM();
    this.dispatchEvent(
      new CustomEvent("languageLoaded", { detail: this.currentLang }),
    );
  }

  // Hybrid Fallback (Option C in Dev / Option A in Production)
  t(key) {
    // 1. Try active language
    let val = this.getNestedValue(this.translations, key);
    if (val) return val;

    // 2. Fall back to Serbian
    val = this.getNestedValue(this.fallbackTranslations, key);
    if (val) return val;

    // 3. Dev warning vs Prod fallback
    if (import.meta.env.DEV) {
      console.warn(
        `[i18n Dev Warning] Missing key: "${key}" in "${this.currentLang}"`,
      );
      return `[MISSING: ${key}]`;
    }
    return key.split(".").pop();
  }

  getNestedValue(obj, path) {
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

    // Ensure base path always ends with a single slash (e.g. "/woodland-estate/")
    const base = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;

    let targetPath = base;

    if (targetLang !== this.defaultLang) {
      targetPath = `${base}${targetLang}/`;
    }

    window.location.href = targetPath;
  }
}

export const i18n = new TranslationManager();
