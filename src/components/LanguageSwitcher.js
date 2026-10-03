export class LanguageSwitcher extends HTMLElement {
  connectedCallback() {
    const rawBase = import.meta.env.BASE_URL || "/";
    const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
    const pathname = window.location.pathname;

    // Detect current language relative to base URL
    let currentLang = "sr";
    if (pathname.includes(`${base}en/`) || pathname.endsWith("/en"))
      currentLang = "en";
    else if (pathname.includes(`${base}ru/`) || pathname.endsWith("/ru"))
      currentLang = "ru";
    else if (pathname.includes(`${base}zh/`) || pathname.endsWith("/zh"))
      currentLang = "zh";

    const languages = [
      { code: "sr", label: "SR", path: base },
      { code: "en", label: "EN", path: `${base}en/` },
      { code: "ru", label: "RU", path: `${base}ru/` },
      { code: "zh", label: "ZH", path: `${base}zh/` },
    ];

    this.innerHTML = `
      <nav aria-label="Language Selector" class="inline-flex items-center gap-1 p-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-none">
        ${languages
          .map((lang) => {
            const isActive = currentLang === lang.code;
            return `
              <a href="${lang.path}" 
                 class="px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${
                   isActive
                     ? "bg-[#c5a880] text-[#121413] font-semibold"
                     : "text-stone-300 hover:text-white hover:bg-white/10"
                 }">
                ${lang.label}
              </a>
            `;
          })
          .join("")}
      </nav>
    `;
  }
}

if (!customElements.get("language-switcher")) {
  customElements.define("language-switcher", LanguageSwitcher);
}
