import { i18n } from "../services/i18n.js";

export class ContactForm extends HTMLElement {
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

    // Formspree Endpoint ID (Replace YOUR_FORM_ID with your Formspree form code)
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvkzdydq";

    this.innerHTML = `
      <div class="bg-[#121413] text-[#f8f7f4] p-8 sm:p-12 border-t-2 border-[#c5a880] shadow-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Form Header & Bullet Points -->
          <div class="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c5a880] block mb-3">
                ${getTranslation("form.badge", "PRAVNI I KATASTARSKI PODACI")}
              </span>
              <h2 class="text-2xl sm:text-4xl font-serif text-white tracking-tight leading-snug">
                ${getTranslation("form.title", "Zatražite Pravni i Katastarski Elaborat")}
              </h2>
              <p class="text-stone-400 text-sm mt-4 leading-relaxed font-light">
                ${getTranslation("form.subtitle", "Popunite formu za preuzimanje kompletnog vlasničkog lista, kopije plana i prostornog rešenja.")}
              </p>
            </div>

            <div class="mt-8 pt-8 border-t border-stone-800 space-y-3">
              <div class="flex items-center gap-3 text-xs text-stone-300">
                <span class="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>${getTranslation("form.direct_contact", "Direktan kontakt sa vlasnikom")}</span>
              </div>
              <div class="flex items-center gap-3 text-xs text-stone-300">
                <span class="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>${getTranslation("form.discretion", "Potpuna diskrecija i privatnost")}</span>
              </div>
            </div>
          </div>

          <!-- Form Fields -->
          <div class="lg:col-span-7">
            <!-- Inline Status Banner -->
            <div id="form-status-banner" class="hidden mb-6 p-4 text-xs font-mono border"></div>

            <form id="estate-lead-form" class="space-y-6">
              <div>
                <label class="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                  ${getTranslation("form.label_name", "VAŠE IME I PREZIME")}
                </label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  placeholder="${getTranslation("form.placeholder_name", "npr. Marko Marković")}"
                  class="w-full bg-stone-900/80 border border-stone-800 focus:border-[#c5a880] px-4 py-3.5 text-sm text-white placeholder-stone-600 outline-none transition-colors duration-200"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                    ${getTranslation("form.label_email", "VAŠ EMAIL")}
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="${getTranslation("form.placeholder_email", "marko@domena.rs")}"
                    class="w-full bg-stone-900/80 border border-stone-800 focus:border-[#c5a880] px-4 py-3.5 text-sm text-white placeholder-stone-600 outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label class="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                    ${getTranslation("form.label_phone", "TELEFON / WHATSAPP")}
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="${getTranslation("form.placeholder_phone", "+381 6x xxx xxxx")}"
                    class="w-full bg-stone-900/80 border border-stone-800 focus:border-[#c5a880] px-4 py-3.5 text-sm text-white placeholder-stone-600 outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label class="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                  ${getTranslation("form.label_message", "PORUKA ILI NAPOMENA (OPCIONO)")}
                </label>
                <textarea 
                  name="message"
                  rows="3" 
                  placeholder="${getTranslation("form.placeholder_message", "Unesite dodatna pitanja...")}"
                  class="w-full bg-stone-900/80 border border-stone-800 focus:border-[#c5a880] px-4 py-3.5 text-sm text-white placeholder-stone-600 outline-none transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              <button 
                id="submit-btn"
                type="submit" 
                class="w-full bg-[#c5a880] hover:bg-white text-[#121413] font-semibold text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <span id="btn-text">${getTranslation("form.submit_btn", "POŠALJITE ZAHTEV")}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    `;

    this.attachFormHandler(FORMSPREE_ENDPOINT, getTranslation);
  }

  attachFormHandler(endpoint, getTranslation) {
    const form = this.querySelector("#estate-lead-form");
    const submitBtn = this.querySelector("#submit-btn");
    const btnText = this.querySelector("#btn-text");
    const statusBanner = this.querySelector("#form-status-banner");

    if (!form) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Set Loading State
      submitBtn.disabled = true;
      submitBtn.classList.add("opacity-75", "cursor-not-allowed");
      btnText.textContent = getTranslation("form.sending", "SLANJE U TOKU...");
      statusBanner.classList.add("hidden");

      try {
        const formData = new FormData(form);
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          // Success Feedback
          statusBanner.className =
            "mb-6 p-4 text-xs font-mono bg-emerald-950/60 border border-emerald-600/50 text-emerald-300 rounded-sm block";
          statusBanner.textContent = getTranslation(
            "form.success_msg",
            "Hvala vam! Vaš zahtev je uspešno poslat. Stupićemo u kontakt sa vama u najkraćem roku.",
          );
          form.reset();
        } else {
          throw new Error("Formspree submission error");
        }
      } catch (error) {
        // Error Feedback
        statusBanner.className =
          "mb-6 p-4 text-xs font-mono bg-rose-950/60 border border-rose-600/50 text-rose-300 rounded-sm block";
        statusBanner.textContent = getTranslation(
          "form.error_msg",
          "Došlo je do greške prilikom slanja. Molimo vas pokušajte ponovo ili nas kontaktirajte direktno.",
        );
      } finally {
        // Reset Button State
        submitBtn.disabled = false;
        submitBtn.classList.remove("opacity-75", "cursor-not-allowed");
        btnText.textContent = getTranslation(
          "form.submit_btn",
          "POŠALJITE ZAHTEV",
        );
      }
    });
  }
}

if (!customElements.get("contact-form")) {
  customElements.define("contact-form", ContactForm);
}
