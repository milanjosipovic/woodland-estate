import { i18n } from "../services/i18n.js";

export class Footer extends HTMLElement {
  connectedCallback() {
    this.render();

    if (!this._hasLanguageListener) {
      i18n.addEventListener("languageLoaded", () => this.render());
      this._hasLanguageListener = true;
    }
  }

  render() {
    const getTranslation = (key, fallback) => {
      const translated = i18n.t(key);
      const lastKeyPart = key.split(".").pop();

      if (
        !translated ||
        typeof translated !== "string" ||
        translated.startsWith("[MISSING") ||
        translated === lastKeyPart
      ) {
        return fallback;
      }
      return translated;
    };

    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <footer class="border-t border-stone-200/60 bg-[#f8f7f4] py-12 text-stone-500 text-xs">
        <div class="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <p class="font-serif text-sm font-semibold text-[#121413]">
              ${getTranslation("meta.title", "Planinsko Šumsko Imanje")}
            </p>
            <p class="text-stone-400 mt-1">
              ${getTranslation("footer.location", "Zapadna Srbija • 12 Hektara")}
            </p>
          </div>
          
          <div class="text-center sm:text-right text-stone-400 space-y-1">
            <p>&copy; ${currentYear} ${getTranslation("footer.rights", "Sva prava zadržana.")}</p>
            <p class="text-[11px]">
              ${getTranslation("footer.disclaimer", "Direktna prodaja od vlasnika. Informacije su informativnog karaktera.")}
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}

if (!customElements.get("app-footer")) {
  customElements.define("app-footer", Footer);
}
