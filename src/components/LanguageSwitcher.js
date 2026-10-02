import { i18n } from "../services/i18n.js";

export class LanguageSwitcher extends HTMLElement {
  connectedCallback() {
    this.render();

    // Re-render when language finishes loading or switching
    i18n.addEventListener("languageLoaded", () => {
      this.render();
    });
  }

  render() {
    const languages = [
      { code: "sr", label: "Srpski" },
      { code: "en", label: "English" },
      { code: "ru", label: "Русский" },
      { code: "zh", label: "中文" },
    ];

    const currentLang = i18n.currentLang || "sr";

    this.innerHTML = `
      <nav class="inline-flex p-1 bg-stone-200/60 rounded-xl gap-1 text-xs font-semibold text-stone-600 border border-stone-200" aria-label="Language selection">
        ${languages
          .map((lang) => {
            const isActive = lang.code === currentLang;
            const activeClasses =
              "bg-white text-emerald-950 shadow-xs border border-stone-200/80 font-bold";
            const inactiveClasses =
              "text-stone-600 hover:text-stone-900 hover:bg-white/50 border border-transparent";

            return `
              <button 
                data-lang="${lang.code}"
                class="px-3 py-1.5 rounded-lg transition-all cursor-pointer ${isActive ? activeClasses : inactiveClasses}"
              >
                ${lang.label}
              </button>
            `;
          })
          .join("")}
      </nav>
    `;

    // Attach click handlers to trigger switchLanguage
    this.querySelectorAll("button[data-lang]").forEach((button) => {
      button.addEventListener("click", (e) => {
        const targetLang = e.currentTarget.getAttribute("data-lang");
        i18n.switchLanguage(targetLang);
      });
    });
  }
}

customElements.define("language-switcher", LanguageSwitcher);
