import { i18n } from "../services/i18n.js";

export class ContactForm extends HTMLElement {
  connectedCallback() {
    this.render();

    // Re-render when language finishes loading/switching
    i18n.addEventListener("languageLoaded", () => {
      this.render();
    });
  }

  render() {
    this.innerHTML = `
      <div class="bg-stone-900 text-stone-100 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto border border-stone-800 space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-emerald-400">${i18n.t("contact.heading")}</h2>
          <p class="text-stone-400 text-sm mt-2 leading-relaxed">${i18n.t("contact.subheading")}</p>
        </div>

        <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" class="space-y-4">
          <input type="hidden" name="submitted_language" value="${i18n.currentLang}" />

          <div>
            <label class="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
              ${i18n.t("contact.name")}
            </label>
            <input 
              type="text" 
              name="name" 
              required 
              class="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-stone-100 focus:outline-hidden focus:border-emerald-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
              ${i18n.t("contact.email")}
            </label>
            <input 
              type="email" 
              name="email" 
              required 
              class="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-stone-100 focus:outline-hidden focus:border-emerald-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
              ${i18n.t("contact.phone")}
            </label>
            <input 
              type="tel" 
              name="phone" 
              class="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-stone-100 focus:outline-hidden focus:border-emerald-500 transition-colors text-sm"
            />
          </div>

          <button 
            type="submit" 
            class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all cursor-pointer mt-4 text-sm tracking-wide"
          >
            ${i18n.t("contact.submit")}
          </button>
        </form>
      </div>
    `;
  }
}

customElements.define("contact-form", ContactForm);
