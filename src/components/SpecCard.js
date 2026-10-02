import { i18n } from "../services/i18n.js";

export class SpecCard extends HTMLElement {
  connectedCallback() {
    this.render();

    // Re-render automatically when language changes
    i18n.addEventListener("languageLoaded", () => {
      this.render();
    });
  }

  render() {
    const labelKey = this.getAttribute("label-key");
    const valueKey = this.getAttribute("value-key");
    const rawValue = this.getAttribute("raw-value");
    const icon = this.getAttribute("icon") || "📌";

    // Resolve translation if valueKey is provided, otherwise use rawValue
    const translatedLabel = labelKey ? i18n.t(labelKey) : "";
    const translatedValue = valueKey ? i18n.t(valueKey) : rawValue;

    this.innerHTML = `
      <div class="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs hover:border-emerald-700/40 transition-colors flex items-start gap-4">
        <div class="text-2xl p-2.5 bg-emerald-50 text-emerald-900 rounded-lg shrink-0">
          ${icon}
        </div>
        <div class="space-y-1">
          <p class="text-xs font-semibold tracking-wider text-stone-500 uppercase">${translatedLabel}</p>
          <p class="text-lg font-bold text-stone-900">${translatedValue}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("spec-card", SpecCard);
