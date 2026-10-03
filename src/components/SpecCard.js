import { i18n } from "../services/i18n.js";

export class SpecCard extends HTMLElement {
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

      // Check if missing translation returned default key fallback or missing indicator
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

    const specKeys = [
      {
        categoryKey: "specs.area.category",
        titleKey: "specs.area.title",
        valueKey: "specs.area.value",
        subtitleKey: "specs.area.subtitle",
        defaultCategory: "POVRŠINA",
        defaultTitle: "UKUPNA POVRŠINA",
        defaultValue: "12 ha",
        defaultSubtitle: "120,000 m²",
        icon: `<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`,
      },
      {
        categoryKey: "specs.forest.category",
        titleKey: "specs.forest.title",
        valueKey: "specs.forest.value",
        subtitleKey: "specs.forest.subtitle",
        defaultCategory: "TEREN",
        defaultTitle: "ŠUMSKI POJAS",
        defaultValue: "7.2 ha",
        defaultSubtitle: "Autohtona crnogorična i bukova šuma",
        icon: `<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L3 14h5v8h8v-8h5L12 2z"/></svg>`,
      },
      {
        categoryKey: "specs.meadow.category",
        titleKey: "specs.meadow.title",
        valueKey: "specs.meadow.value",
        subtitleKey: "specs.meadow.subtitle",
        defaultCategory: "TEREN",
        defaultTitle: "LIVADE & PAŠNJACI",
        defaultValue: "4.8 ha",
        defaultSubtitle: "Otvorene sunčane padine",
        icon: `<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="1.5"/></svg>`,
      },
      {
        categoryKey: "specs.elevation.category",
        titleKey: "specs.elevation.title",
        valueKey: "specs.elevation.value",
        subtitleKey: "specs.elevation.subtitle",
        defaultCategory: "TOPOGRAFIJA",
        defaultTitle: "NADMORSKA VISINA",
        defaultValue: "850 m.a.s.l.",
        defaultSubtitle: "Panoramski pogledi i čist planinski vazduh",
        icon: `<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
      },
      {
        categoryKey: "specs.power.category",
        titleKey: "specs.power.title",
        valueKey: "specs.power.value",
        subtitleKey: "specs.power.subtitle",
        defaultCategory: "INFRASTRUKTURA",
        defaultTitle: "ELEKTRIČNA MREŽA",
        defaultValue: "Priključak na Placu",
        defaultSubtitle: "Stabilno trofazno napajanje",
        icon: `<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
      },
      {
        categoryKey: "specs.water.category",
        titleKey: "specs.water.title",
        valueKey: "specs.water.value",
        subtitleKey: "specs.water.subtitle",
        defaultCategory: "INFRASTRUKTURA",
        defaultTitle: "VODOSNABDEVANJE",
        defaultValue: "Izvorski Priključak",
        defaultSubtitle: "Sopstveni prirodni izvor čiste vode",
        icon: `<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>`,
      },
      {
        categoryKey: "specs.access.category",
        titleKey: "specs.access.title",
        valueKey: "specs.access.value",
        subtitleKey: "specs.access.subtitle",
        defaultCategory: "PRISTUP",
        defaultTitle: "PRILAZNI PUT",
        defaultValue: "Asfalt + 350m",
        defaultSubtitle: "Uređen makadamski prilaz do imanja",
        icon: `<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
      },
      {
        categoryKey: "specs.legal.category",
        titleKey: "specs.legal.title",
        valueKey: "specs.legal.value",
        subtitleKey: "specs.legal.subtitle",
        defaultCategory: "PRAVNI STATUS",
        defaultTitle: "VLASNIŠTVO",
        defaultValue: "1/1 Uknjiženo",
        defaultSubtitle: "Bez tereta i zabeležbi, čist vlasnički list",
        icon: `<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
      },
    ];

    this.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${specKeys
          .map((item) => {
            const category = getTranslation(
              item.categoryKey,
              item.defaultCategory,
            );
            const title = getTranslation(item.titleKey, item.defaultTitle);
            const value = getTranslation(item.valueKey, item.defaultValue);
            const subtitle = getTranslation(
              item.subtitleKey,
              item.defaultSubtitle,
            );

            return `
              <div class="bg-white border border-stone-200/80 p-6 flex flex-col justify-between hover:border-[#c5a880] transition-all duration-300 shadow-sm hover:shadow-md min-w-0 overflow-hidden">
                <div>
                  <div class="flex justify-between items-start mb-4">
                    <span class="text-[10px] font-mono tracking-widest uppercase text-stone-400 truncate pr-2">
                      ${category}
                    </span>
                    ${item.icon}
                  </div>
                  <h3 class="text-[11px] font-semibold tracking-wider uppercase text-stone-600 mb-2 min-h-[1.75rem] leading-tight flex items-center">
                    ${title}
                  </h3>
                  <p class="text-xl sm:text-2xl lg:text-3xl font-serif text-[#121413] tracking-tight break-words leading-tight">
                    ${value}
                  </p>
                </div>
                <div class="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 leading-relaxed font-light break-words">
                  ${subtitle}
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }
}

if (!customElements.get("spec-card")) {
  customElements.define("spec-card", SpecCard);
}
