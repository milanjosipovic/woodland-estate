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
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3) !important;
        }
        .leaflet-popup-tip {
          background-color: #121413 !important;
        }
        @keyframes pin-pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(197, 168, 128, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(197, 168, 128, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(197, 168, 128, 0);
          }
        }
        .luxury-map-pin-pulse {
          animation: pin-pulse 2s infinite;
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

    const estateCoords = [43.89129, 19.781953];

    this._mapInstance = L.map(mapEl, {
      center: estateCoords,
      zoom: 12,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._mapInstance);

    // Sleek, compact pin design (24x24px) with subtle golden border & pulsing glow
    const customIcon = L.divIcon({
      className: "custom-map-pin",
      html: `
        <div class="relative flex items-center justify-center w-6 h-6">
          <div class="absolute inset-0 bg-[#c5a880] rounded-full opacity-40 luxury-map-pin-pulse"></div>
          <div class="relative w-5 h-5 bg-[#121413] border-[1.5px] border-[#c5a880] rounded-full flex items-center justify-center shadow-md">
            <span class="w-1.5 h-1.5 bg-[#c5a880] rounded-full"></span>
          </div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    const popupText = i18n.t("map.popup") || "Imanje 2.17 ha";
    L.marker(estateCoords, { icon: customIcon })
      .addTo(this._mapInstance)
      .bindPopup(
        `<div class="font-serif text-xs font-semibold text-[#c5a880] tracking-wide">${popupText}</div>`,
      );
  }
}

if (!customElements.get("property-map")) {
  customElements.define("property-map", PropertyMap);
}
