import Swiper from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { i18n } from "../services/i18n.js";

export class ImageGallery extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initSwiper();

    if (!this._hasLanguageListener) {
      i18n.addEventListener("languageLoaded", () => {
        this.render();
        this.initSwiper();
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

    const images = [
      {
        src: `${import.meta.env.BASE_URL}images/1.jpg`,
        alt: getTranslation("gallery.img1_alt", "Pogled na imanje"),
      },
      {
        src: `${import.meta.env.BASE_URL}images/2.jpg`,
        alt: getTranslation("gallery.img2_alt", "Priroda i okruženje"),
      },
      {
        src: `${import.meta.env.BASE_URL}images/3.jpg`,
        alt: getTranslation("gallery.img3_alt", "Šumski pojas"),
      },
      {
        src: `${import.meta.env.BASE_URL}images/4.jpg`,
        alt: getTranslation("gallery.img4_alt", "Livade i teren"),
      },
      {
        src: `${import.meta.env.BASE_URL}images/5.jpg`,
        alt: getTranslation("gallery.img5_alt", "Panoramski prikaz"),
      },
    ];

    this.innerHTML = `
      <section class="py-16 md:py-24 bg-[#fcfbf9] border-b border-stone-200/60">
        <div class="max-w-6xl mx-auto px-6 sm:px-12 md:px-16">
          
          <!-- Section Header & Text -->
          <div class="max-w-2xl mb-10 md:mb-14">
            <span class="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c5a880] block mb-3">
              ${getTranslation("gallery.badge", "VIZUELNI PRIKAZ IMANJA")}
            </span>
            <h2 class="text-2xl sm:text-4xl font-serif text-[#121413] tracking-tight leading-snug">
              ${getTranslation("gallery.title", "Fotogalerija i Teren")}
            </h2>
            <p class="text-stone-500 text-sm mt-4 leading-relaxed font-light">
              ${getTranslation(
                "gallery.subtitle",
                "Pregled prirodnog okruženja, topografije i prilaznih puteva imanja obuhvaćenih u 12 hektara neprekidne celine.",
              )}
            </p>
          </div>

          <!-- Swiper Slider Container -->
          <div class="relative w-full overflow-hidden bg-stone-900 group rounded-sm shadow-lg border border-stone-200/80">
            <div class="swiper main-swiper w-full aspect-[4/3] sm:aspect-[16/9]">
              <div class="swiper-wrapper">
                ${images
                  .map(
                    (img) => `
                    <div class="swiper-slide w-full h-full relative">
                      <img 
                        src="${img.src}" 
                        alt="${img.alt}" 
                        class="w-full h-full object-cover" 
                        loading="lazy"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
                    </div>
                  `,
                  )
                  .join("")}
              </div>

              <!-- Navigation Arrows -->
              <button type="button" aria-label="Previous Slide" class="swiper-button-prev custom-nav-btn !left-4">
                <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button type="button" aria-label="Next Slide" class="swiper-button-next custom-nav-btn !right-4">
                <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <!-- Pagination Dots -->
              <div class="swiper-pagination !bottom-5 !left-0 !right-0 flex justify-center items-center gap-1.5"></div>
            </div>
          </div>

        </div>
      </section>

      <!-- Styling Overrides -->
      <style>
        .swiper-button-prev::after,
        .swiper-button-next::after {
          content: '' !important;
          display: none !important;
        }

        .custom-nav-btn {
          width: 42px !important;
          height: 42px !important;
          margin-top: -21px !important;
          background-color: rgba(18, 20, 19, 0.7) !important;
          color: #ffffff !important;
          border-radius: 9999px !important;
          border: 1px solid rgba(255, 255, 255, 0.25) !important;
          backdrop-filter: blur(4px) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s ease !important;
        }

        .custom-nav-btn:hover {
          background-color: #c5a880 !important;
          color: #121413 !important;
          border-color: #c5a880 !important;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6) !important;
          opacity: 0.7 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #c5a880 !important;
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      </style>
    `;
  }

  initSwiper() {
    const swiperEl = this.querySelector(".main-swiper");
    if (!swiperEl) return;

    new Swiper(swiperEl, {
      modules: [Navigation, Pagination, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      autoplay: false,
      pagination: {
        el: this.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: this.querySelector(".swiper-button-next"),
        prevEl: this.querySelector(".swiper-button-prev"),
      },
    });
  }
}

if (!customElements.get("image-gallery")) {
  customElements.define("image-gallery", ImageGallery);
}
