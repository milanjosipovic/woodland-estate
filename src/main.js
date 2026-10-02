import "./style.css";
import { i18n } from "./services/i18n.js";
import "./components/LanguageSwitcher.js"; // Registers <language-switcher>
import "./components/SpecCard.js";
import "./components/ContactForm.js"; // Registers <contact-form>

// Initialize internationalization service on DOM load
document.addEventListener("DOMContentLoaded", async () => {
  await i18n.init();
  await loadPropertySpecs();
});

async function loadPropertySpecs() {
  const container = document.getElementById("specs-container");
  if (!container) return;

  try {
    const baseUrl = import.meta.env.BASE_URL;
    const response = await fetch(`${baseUrl}data/property-data.json`);
    const data = await response.json();

    const { metrics, infrastructure, legal } = data;

    container.innerHTML = `
      <spec-card icon="📐" label-key="specs.total_area" raw-value="${metrics.total_area_ha} ha (${metrics.total_area_sqm.toLocaleString()} m²)"></spec-card>
      <spec-card icon="🌲" label-key="specs.forest_area" raw-value="${metrics.forest_area_ha} ha"></spec-card>
      <spec-card icon="🌱" label-key="specs.meadow_area" raw-value="${metrics.meadow_area_ha} ha"></spec-card>
      <spec-card icon="⛰️" label-key="specs.elevation" raw-value="${metrics.elevation_masl} m.a.s.l."></spec-card>
      <spec-card icon="⚡" label-key="specs.electricity" value-key="values.${infrastructure.electricity_connection}"></spec-card>
      <spec-card icon="💧" label-key="specs.water" value-key="values.${infrastructure.water_source}"></spec-card>
      <spec-card icon="🛣️" label-key="specs.road" value-key="values.${infrastructure.road_access}"></spec-card>
      <spec-card icon="📜" label-key="specs.ownership" value-key="values.${legal.encumbrance_status}"></spec-card>
    `;
  } catch (error) {
    console.error("Failed to load property data:", error);
  }
}
