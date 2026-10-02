import { i18n } from "../services/i18n.js";

export class LanguageSwitcher extends HTMLElement {
  connectedCallback() {
    const activeLang = i18n.currentLang;

    this.innerHTML = `
      <nav class="flex gap-1 bg-stone-200/60 p-1 rounded-lg text-xs font-bold text-stone-700">
        ${this.renderBtn("sr", "Srpski", activeLang)}
        ${this.renderBtn("en", "English", activeLang)}
        ${this.renderBtn("ru", "Русский", activeLang)}
        ${this.renderBtn("zh", "中文", activeLang)}
      </nav>
    `;

    // Attach click listeners for path redirection
    this.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const lang = e.currentTarget.getAttribute("data-lang");
        i18n.switchLanguage(lang);
      });
    });
  }

  renderBtn(langCode, label, activeLang) {
    const isActive = langCode === activeLang;
    const activeClasses = isActive
      ? "bg-white text-emerald-900 shadow-sm"
      : "hover:text-emerald-800 transition-colors";

    return `
      <button data-lang="${langCode}" class="px-2.5 py-1.5 rounded-md ${activeClasses}">
        ${label}
      </button>
    `;
  }
}

// Register the custom HTML element natively
customElements.define("language-switcher", LanguageSwitcher);
