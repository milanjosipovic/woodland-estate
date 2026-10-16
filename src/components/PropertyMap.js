import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { i18n } from "../services/i18n.js";

export class PropertyMap extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initMap();

    if (!this._hasLanguageListener) {
      i18n.addEventListener("languageLoaded", () => {
        this.render();
        this.initMap();
      });
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

    this.innerHTML = `
      <section class="py-16 md:py-24 bg-[#f8f7f4] border-b border-stone-200/60">
        <div class="max-w-6xl mx-auto px-6 sm:px-12 md:px-16">
          
          <!-- Section Header -->
          <div class="max-w-2xl mb-10 md:mb-14">
            <span class="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c5a880] block mb-3">
              ${getTranslation("map.badge", "LOKACIJA I PRISTUPAČNOST")}
            </span>
            <h2 class="text-2xl sm:text-4xl font-serif text-[#121413] tracking-tight leading-snug">
              ${getTranslation("map.title", "Geografski Položaj")}
            </h2>
            <p class="text-stone-500 text-sm mt-4 leading-relaxed font-light">
              ${getTranslation(
                "map.subtitle",
                "Ekskluzivno imanje pozicionirano u nedotaknutoj prirodi Zapadne Srbije sa brzim pristupom glavnim saobraćajnicama.",
              )}
            </p>
          </div>

          <!-- Map Container -->
          <div class="relative w-full h-[400px] sm:h-[500px] rounded-sm shadow-lg overflow-hidden border border-stone-200/80 z-0">
            <div id="estate-leaflet-map" class="w-full h-full"></div>
          </div>

        </div>
      </section>

      <!-- Leaflet Custom Styles -->
      <style>
        .leaflet-popup-content-wrapper {
          background-color: #121413 !important;
          color: #f8f7f4 !important;
          border-radius: 2px !important;
          padding: 8px 12px !important;
          border-top: 2px solid #c5a880 !important;
        }
        .leaflet-popup-tip {
          background-color: #121413 !important;
        }
      </style>
    `;
  }

  initMap() {
    const mapEl = this.querySelector("#estate-leaflet-map");
    if (!mapEl) return;

    // Destroy previous map instance if re-rendering on language change
    if (this._mapInstance) {
      this._mapInstance.remove();
      this._mapInstance = null;
    }

    const estateCoords = [43.8583, 18.8333];

    this._mapInstance = L.map(mapEl, {
      center: estateCoords,
      zoom: 11,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._mapInstance);

    const customIcon = L.divIcon({
      className: "custom-map-pin",
      html: `
      <div class="w-8 h-8 bg-[#121413] border-2 border-[#c5a880] rounded-full flex items-center justify-center shadow-lg">
        <span class="w-2.5 h-2.5 bg-[#c5a880] rounded-full"></span>
      </div>
    `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    const popupText = i18n.t("map.popup") || "Planinsko Šumsko Imanje (12 ha)";
    L.marker(estateCoords, { icon: customIcon })
      .addTo(this._mapInstance)
      .bindPopup(
        `<div class="font-serif text-sm font-semibold text-[#c5a880]">${popupText}</div>`,
      );
  }
}

if (!customElements.get("property-map")) {
  customElements.define("property-map", PropertyMap);
}
