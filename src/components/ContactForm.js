import { i18n } from "../services/i18n.js";

export class ContactForm extends HTMLElement {
  connectedCallback() {
    this.render();

    i18n.addEventListener("languageLoaded", () => {
      this.render();
    });
  }

  render() {
    const getTranslation = (key, fallback) => {
      const translated = i18n.t(key);
      return translated && !translated.startsWith("[MISSING")
        ? translated
        : fallback;
    };

    this.innerHTML = `
      <div class="bg-stone-900 text-stone-100 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto border border-stone-800 space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-emerald-400">
            ${getTranslation("contact.heading", "Zatražite Detaljnu Dokumentaciju")}
          </h2>
          <p class="text-stone-400 text-sm mt-2 leading-relaxed">
            ${getTranslation("contact.subheading", "Popunite formu kako biste preuzeli Informacioni Paket sa katastarskim podacima.")}
          </p>
        </div>

        <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" class="space-y-4">
          <input type="hidden" name="submitted_language" value="${i18n.currentLang || "sr"}" />

          <div>
            <label class="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
              ${getTranslation("contact.name", "Vaše Ime i Prezime")}
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
              ${getTranslation("contact.email", "Vaš Email")}
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
              ${getTranslation("contact.phone", "Telefon / WhatsApp")}
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
            ${getTranslation("contact.submit", "Pošaljite Upit")}
          </button>
        </form>
      </div>
    `;
  }
}

customElements.define("contact-form", ContactForm);
