(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new class extends EventTarget{constructor(){super(),this.supportedLangs=[`sr`,`en`,`ru`,`zh`],this.defaultLang=`sr`,this.fallbackLang=`sr`,this.currentLang=this.defaultLang,this.translations={},this.fallbackTranslations={}}getBaseUrl(){let e=`/woodland-estate/`;return e.endsWith(`/`)?e:`${e}/`}async init(){let e=window.location.pathname.split(`/`).filter(Boolean),t=[`en`,`ru`,`zh`],n=e.find(e=>t.includes(e));this.currentLang=n||this.defaultLang;let r=this.getBaseUrl();try{let e=await fetch(`${r}locales/${this.currentLang}.json`);if(e.ok&&(this.translations=await e.json()),this.currentLang!==this.fallbackLang){let e=await fetch(`${r}locales/${this.fallbackLang}.json`);e.ok&&(this.fallbackTranslations=await e.json())}}catch(e){console.error(`[i18n] Failed loading locale JSON:`,e)}this.translateDOM(),this.dispatchEvent(new CustomEvent(`languageLoaded`,{detail:this.currentLang}))}t(e){let t=this.getNestedValue(this.translations,e);return t||(t=this.getNestedValue(this.fallbackTranslations,e),t)?t:e.split(`.`).pop()}getNestedValue(e,t){return!e||!t?null:t.split(`.`).reduce((e,t)=>e?e[t]:null,e)}translateDOM(){this.currentLang&&(document.documentElement.lang=this.currentLang),document.querySelectorAll(`[data-i18n]`).forEach(e=>{let t=e.getAttribute(`data-i18n`);e.textContent=this.t(t)});let e=this.t(`meta.title`);e&&!e.startsWith(`[MISSING`)&&(document.title=e)}switchLanguage(e){if(e===this.currentLang)return;let t=this.getBaseUrl(),n=t;e!==this.defaultLang&&(n=`${t}${e}/`),window.location.href=n}},t=class extends HTMLElement{connectedCallback(){this.render(),e.addEventListener(`languageLoaded`,()=>{this.render()})}render(){let t=[{code:`sr`,label:`Srpski`},{code:`en`,label:`English`},{code:`ru`,label:`Русский`},{code:`zh`,label:`中文`}],n=document.documentElement.lang||`sr`,r=e.currentLang||n;this.innerHTML=`
      <nav class="inline-flex p-1 bg-stone-200/60 rounded-xl gap-1 text-xs font-semibold text-stone-600 border border-stone-200" aria-label="Language selection">
        ${t.map(e=>{let t=e.code===r;return`
              <button 
                data-lang="${e.code}"
                class="px-3 py-1.5 rounded-lg transition-all cursor-pointer ${t?`bg-white text-emerald-950 shadow-xs border border-stone-200/80 font-bold`:`text-stone-600 hover:text-stone-900 hover:bg-white/50 border border-transparent`}"
              >
                ${e.label}
              </button>
            `}).join(``)}
      </nav>
    `,this.querySelectorAll(`button[data-lang]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-lang`);e.switchLanguage(n)})})}};customElements.define(`language-switcher`,t);var n=class extends HTMLElement{connectedCallback(){this.render(),e.addEventListener(`languageLoaded`,()=>{this.render()})}render(){let t=this.getAttribute(`label-key`),n=this.getAttribute(`value-key`),r=this.getAttribute(`raw-value`),i=this.getAttribute(`icon`)||`📌`,a=t?e.t(t):``,o=n?e.t(n):r;this.innerHTML=`
      <div class="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs hover:border-emerald-700/40 transition-colors flex items-start gap-4">
        <div class="text-2xl p-2.5 bg-emerald-50 text-emerald-900 rounded-lg shrink-0">
          ${i}
        </div>
        <div class="space-y-1">
          <p class="text-xs font-semibold tracking-wider text-stone-500 uppercase">${a}</p>
          <p class="text-lg font-bold text-stone-900">${o}</p>
        </div>
      </div>
    `}};customElements.define(`spec-card`,n);var r=class extends HTMLElement{connectedCallback(){this.render(),e.addEventListener(`languageLoaded`,()=>{this.render()})}render(){let t=(t,n)=>{let r=e.t(t);return r&&!r.startsWith(`[MISSING`)?r:n};this.innerHTML=`
      <div class="bg-stone-900 text-stone-100 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto border border-stone-800 space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-emerald-400">
            ${t(`contact.heading`,`Zatražite Detaljnu Dokumentaciju`)}
          </h2>
          <p class="text-stone-400 text-sm mt-2 leading-relaxed">
            ${t(`contact.subheading`,`Popunite formu kako biste preuzeli Informacioni Paket sa katastarskim podacima.`)}
          </p>
        </div>

        <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" class="space-y-4">
          <input type="hidden" name="submitted_language" value="${e.currentLang||`sr`}" />

          <div>
            <label class="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
              ${t(`contact.name`,`Vaše Ime i Prezime`)}
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
              ${t(`contact.email`,`Vaš Email`)}
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
              ${t(`contact.phone`,`Telefon / WhatsApp`)}
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
            ${t(`contact.submit`,`Pošaljite Upit`)}
          </button>
        </form>
      </div>
    `}};customElements.define(`contact-form`,r),document.addEventListener(`DOMContentLoaded`,async()=>{await e.init(),await i()});async function i(){let e=document.getElementById(`specs-container`);if(e)try{let{metrics:t,infrastructure:n,legal:r}=await(await fetch(`/woodland-estate/data/property-data.json`)).json();e.innerHTML=`
      <spec-card icon="📐" label-key="specs.total_area" raw-value="${t.total_area_ha} ha (${t.total_area_sqm.toLocaleString()} m²)"></spec-card>
      <spec-card icon="🌲" label-key="specs.forest_area" raw-value="${t.forest_area_ha} ha"></spec-card>
      <spec-card icon="🌱" label-key="specs.meadow_area" raw-value="${t.meadow_area_ha} ha"></spec-card>
      <spec-card icon="⛰️" label-key="specs.elevation" raw-value="${t.elevation_masl} m.a.s.l."></spec-card>
      <spec-card icon="⚡" label-key="specs.electricity" value-key="values.${n.electricity_connection}"></spec-card>
      <spec-card icon="💧" label-key="specs.water" value-key="values.${n.water_source}"></spec-card>
      <spec-card icon="🛣️" label-key="specs.road" value-key="values.${n.road_access}"></spec-card>
      <spec-card icon="📜" label-key="specs.ownership" value-key="values.${r.encumbrance_status}"></spec-card>
    `}catch(e){console.error(`Failed to load property data:`,e)}}