(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={sr:{meta:{title:`Planinsko Šumsko Imanje | Prirodna Oaza`},nav:{overview:`O imanju`,specs:`Karakteristike`,location:`Lokacija`,contact:`Kontakt`},hero:{badge:`Privatno Imanje`,title:`Planinsko Šumsko Imanje`,subtitle:`12 Hektara netaknute prirode sa otvorenim pogledom u Zapadnoj Srbiji`},specs:{total_area:`Ukupna Površina`,forest_area:`Površina Šume`,meadow_area:`Površina Livade`,elevation:`Nadmorska Visina`,electricity:`Električna Mreža`,water:`Vodosnabdevanje`,road:`Prilazni Put`,ownership:`Vlasništvo`},values:{paved_to_macadam:`Asfalt + 350m Makadam`,on_site:`Priključak na placu`,natural_spring:`Sopstveni izvorski priključak`,clear_no_encumbrance:`1/1 Uknjiženo, Bez tereta`,agricultural_and_forest:`Poljoprivredno i Šumsko zemljište`},contact:{heading:`Zatražite Detaljnu Dokumentaciju`,subheading:`Popunite formu kako biste preuzeli Informacioni Paket sa katastarskim podacima.`,name:`Vaše Ime i Prezime`,email:`Vaš Email`,phone:`Telefon / WhatsApp`,submit:`Pošaljite Upit`},footer:{disclaimer:`Direktna prodaja od vlasnika. Informacije su informativnog karaktera.`}},en:{meta:{title:`Mountain Woodland Estate | Private Sanctuary`},nav:{overview:`Overview`,specs:`Specifications`,location:`Location`,contact:`Contact`},hero:{badge:`Private Estate`,title:`Mountain Woodland Estate`,subtitle:`12 Hectares of untouched nature with open views in Western Serbia`},specs:{area:{category:`AREA`,title:`TOTAL AREA`,value:`12 ha`,subtitle:`120,000 m²`},forest:{category:`TERRAIN`,title:`FOREST COVER`,value:`7.2 ha`,subtitle:`Native coniferous and beech forest`},meadow:{category:`TERRAIN`,title:`MEADOWS & PASTURES`,value:`4.8 ha`,subtitle:`Open sunny slopes`},elevation:{category:`TOPOGRAPHY`,title:`ELEVATION`,value:`850 m.a.s.l.`,subtitle:`Panoramic views & clean mountain air`},power:{category:`INFRASTRUCTURE`,title:`POWER GRID`,value:`On-site Connection`,subtitle:`Stable three-phase power supply`},water:{category:`INFRASTRUCTURE`,title:`WATER SUPPLY`,value:`Spring Water`,subtitle:`Private natural pure water spring`},access:{category:`ACCESS`,title:`ACCESS ROAD`,value:`Asphalt + 350m`,subtitle:`Maintained gravel access to property`},legal:{category:`LEGAL STATUS`,title:`OWNERSHIP`,value:`1/1 Clear Title`,subtitle:`Free of encumbrances & liens`}},values:{paved_to_macadam:`Paved Road + 350m Macadam`,on_site:`Connection on Plot`,natural_spring:`Private Spring Water`,clear_no_encumbrance:`1/1 Registered, Clear Title`,agricultural_and_forest:`Agricultural & Forest Land`},contact:{heading:`Request Legal Dossier`,subheading:`Fill out the form to download the Information Package with cadastral records.`,name:`Full Name`,email:`Email Address`,phone:`Phone / WhatsApp`,submit:`Send Inquiry`},form:{badge:`LEGAL & CADASTRAL DATA`,title:`Request Legal Dossier`,subtitle:`Fill out the form to download the Information Package with cadastral records.`,direct_contact:`Direct contact with owner`,discretion:`Full discretion & privacy`,label_name:`YOUR FULL NAME`,placeholder_name:`e.g. John Smith`,label_email:`YOUR EMAIL`,placeholder_email:`john@domain.com`,label_phone:`PHONE / WHATSAPP`,placeholder_phone:`+1 555 0192`,label_message:`MESSAGE OR NOTE (OPTIONAL)`,placeholder_message:`Enter additional questions...`,submit_btn:`SUBMIT REQUEST`},footer:{location:`Western Serbia • 12 Hectares`,rights:`All rights reserved.`,disclaimer:`Direct sale from owner. Information is provided for reference only.`}},ru:{meta:{title:`Горное Лесное Имение | Частное Имение`},nav:{overview:`Обзор`,specs:`Характеристики`,location:`Локация`,contact:`Контакты`},hero:{badge:`Частное Имение`,title:`Горное Лесное Имение`,subtitle:`12 Гектаров нетронутой природы с панорамным видом в Западной Сербии`},specs:{area:{category:`ПЛОЩАДЬ`,title:`ОБЩАЯ ПЛОЩАДЬ`,value:`12 га`,subtitle:`120 000 м²`},forest:{category:`ТЕРРИТОРИЯ`,title:`ЛЕСНОЙ МАССИВ`,value:`7.2 га`,subtitle:`Хвойный и буковый лес`},meadow:{category:`ТЕРРИТОРИЯ`,title:`ЛУГА И ПАСТБИЩА`,value:`4.8 га`,subtitle:`Открытые солнечные склоны`},elevation:{category:`ТОПОГРАФИЯ`,title:`ВЫСОТА НАД УРОВНЕМ МОРЯ`,value:`850 м`,subtitle:`Панорамный вид и чистый воздух`},power:{category:`ИНФРАСТРУКТУРА`,title:`ЭЛЕКТРИЧЕСТВО`,value:`Подключено`,subtitle:`Стабильная 3-фазная сеть`},water:{category:`ИНФРАСТРУКТУРА`,title:`ВОДОСНАБЖЕНИЕ`,value:`Родник`,subtitle:`Собственный природный источник`},access:{category:`ПОДЪЕЗД`,title:`ДОРОГА`,value:`Асфальт + 350м`,subtitle:`Ухоженная грунтовая дорога`},legal:{category:`ЮРИДИЧЕСКИЙ СТАТУС`,title:`СОБСТВЕННОСТЬ`,value:`1/1 Зарегистрировано`,subtitle:`Чистые документы, без обременений`}},values:{paved_to_macadam:`Асфальт + 350м Макадам`,on_site:`Подключение на участке`,natural_spring:`Собственный родник`,clear_no_encumbrance:`1/1 В собственности, Без обременений`,agricultural_and_forest:`Сельскохозяйственные и Лесные земли`},contact:{heading:`Запросить Юридический Пакет`,subheading:`Заполните форму для получения информационного пакета с кадастровыми данными.`,name:`Имя и Фамилия`,email:`Электронная Почта`,phone:`Телефон / WhatsApp`,submit:`Отправить Запрос`},form:{badge:`ЮРИДИЧЕСКИЕ И КАДАСТРОВЫЕ ДАННЫЕ`,title:`Запросить Юридический Пакет`,subtitle:`Заполните форму для получения информационного пакета с кадастровыми данными.`,direct_contact:`Прямой контакт с владельцем`,discretion:`Полная конфиденциальность`,label_name:`ВАШЕ ИМЯ И ФАМИЛИЯ`,placeholder_name:`напр. Иван Иванов`,label_email:`ВАШ EMAIL`,placeholder_email:`ivan@domena.ru`,label_phone:`ТЕЛЕФОН / WHATSAPP`,placeholder_phone:`+7 9xx xxx xxxx`,label_message:`СООБЩЕНИЕ ИЛИ ПРИМЕЧАНИЕ (ОПЦИОНАЛЬНО)`,placeholder_message:`Задайте дополнительные вопросы...`,submit_btn:`ОТПРАВИТЬ ЗАПРОС`},footer:{location:`Западная Сербия • 12 Гектаров`,rights:`Все права защищены.`,disclaimer:`Прямая продажа от собственника. Информация носит ознакомительный характер.`}},zh:{meta:{title:`高山森林庄园 | 私人庄园`},nav:{overview:`项目概览`,specs:`技术指标`,location:`地理位置`,contact:`联系我们`},hero:{badge:`私人庄园`,title:`高山森林庄园`,subtitle:`位于塞尔维亚西部，拥有12公顷原生自然风光与辽阔视野`},specs:{area:{category:`面积`,title:`总面积`,value:`12 公顷`,subtitle:`120,000 平方米`},forest:{category:`地形`,title:`森林区域`,value:`7.2 公顷`,subtitle:`天然针叶与榉木林`},meadow:{category:`地形`,title:`草地与牧场`,value:`4.8 公顷`,subtitle:`开阔向阳山坡`},elevation:{category:`地貌`,title:`海拔高度`,value:`850 米`,subtitle:`全景视野与清新空气`},power:{category:`基础设施`,title:`电力供应`,value:`接入地块`,subtitle:`稳定三相供电`},water:{category:`基础设施`,title:`水源连接`,value:`天然泉水`,subtitle:`地块内独立纯净泉水源`},access:{category:`交通`,title:`道路连接`,value:`柏油路 + 350米`,subtitle:`修缮良好碎石路直达`},legal:{category:`法律状态`,title:`产权状况`,value:`1/1 完整产权`,subtitle:`无抵押无纠纷，产权清晰`}},values:{paved_to_macadam:`柏油路 + 350米碎石路`,on_site:`地块内已接入`,natural_spring:`天然泉水接入口`,clear_no_encumbrance:`1/1 独立产权，无抵押`,agricultural_and_forest:`农业与森林用地`},contact:{heading:`索取完整法律文件包`,subheading:`填写表格下载包含地籍数据的详细资料包。`,name:`姓名`,email:`电子邮箱`,phone:`电话 / WhatsApp`,submit:`发送咨询`},form:{badge:`法律与地籍数据`,title:`索取完整法律文件包`,subtitle:`填写表格下载包含地籍数据的详细资料包。`,direct_contact:`直接联系业主`,discretion:`严守保密与隐私`,label_name:`您的姓名`,placeholder_name:`例如：张伟`,label_email:`您的电子邮箱`,placeholder_email:`zhangwei@domain.com`,label_phone:`电话 / WHATSAPP`,placeholder_phone:`+86 138 xxxx xxxx`,label_message:`留言或备注（可选）`,placeholder_message:`请输入您的具体疑问...`,submit_btn:`发送申请`},footer:{location:`西塞尔维亚 • 12 公顷`,rights:`保留所有权利。`,disclaimer:`业主直售。所提供信息仅供参考。`}}},t=new class extends EventTarget{constructor(){super(),this.supportedLangs=[`sr`,`en`,`ru`,`zh`],this.defaultLang=`sr`,this.fallbackLang=`sr`,this.currentLang=this.defaultLang,this.translations={},this.fallbackTranslations={}}getBaseUrl(){let e=`/woodland-estate/`;return e.endsWith(`/`)?e:`${e}/`}async init(){let t=window.location.pathname.split(`/`).filter(Boolean),n=[`en`,`ru`,`zh`],r=t.find(e=>n.includes(e));this.currentLang=r||this.defaultLang,this.translations=e[this.currentLang]||e[this.defaultLang],this.fallbackTranslations=e[this.fallbackLang],this.translateDOM(),this.dispatchEvent(new CustomEvent(`languageLoaded`,{detail:this.currentLang}))}t(e){let t=this.getNestedValue(this.translations,e);return t||(t=this.getNestedValue(this.fallbackTranslations,e),t)?t:e.split(`.`).pop()}getNestedValue(e,t){return!e||!t?null:t.split(`.`).reduce((e,t)=>e?e[t]:null,e)}translateDOM(){this.currentLang&&(document.documentElement.lang=this.currentLang),document.querySelectorAll(`[data-i18n]`).forEach(e=>{let t=e.getAttribute(`data-i18n`);e.textContent=this.t(t)}),document.querySelectorAll(`[data-i18n-placeholder]`).forEach(e=>{let t=e.getAttribute(`data-i18n-placeholder`);e.setAttribute(`placeholder`,this.t(t))}),document.querySelectorAll(`[data-i18n-aria]`).forEach(e=>{let t=e.getAttribute(`data-i18n-aria`);e.setAttribute(`aria-label`,this.t(t))}),document.querySelectorAll(`[data-i18n-alt]`).forEach(e=>{let t=e.getAttribute(`data-i18n-alt`);e.setAttribute(`alt`,this.t(t))});let e=this.t(`meta.title`);e&&!e.startsWith(`[MISSING`)&&(document.title=e);let t=this.t(`meta.description`);if(t&&!t.startsWith(`[MISSING`)){let e=document.querySelector(`meta[name="description"]`);e&&e.setAttribute(`content`,t)}}switchLanguage(e){if(e===this.currentLang)return;let t=this.getBaseUrl(),n=t;e!==this.defaultLang&&(n=`${t}${e}/`),window.location.href=n}},n=class extends HTMLElement{connectedCallback(){let e=`/woodland-estate/`,t=e.endsWith(`/`)?e:`${e}/`,n=window.location.pathname,r=`sr`;n.includes(`${t}en/`)||n.endsWith(`/en`)?r=`en`:n.includes(`${t}ru/`)||n.endsWith(`/ru`)?r=`ru`:(n.includes(`${t}zh/`)||n.endsWith(`/zh`))&&(r=`zh`);let i=[{code:`sr`,label:`SR`,path:t},{code:`en`,label:`EN`,path:`${t}en/`},{code:`ru`,label:`RU`,path:`${t}ru/`},{code:`zh`,label:`ZH`,path:`${t}zh/`}];this.innerHTML=`
      <nav aria-label="Language Selector" class="inline-flex items-center gap-1 p-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-none">
        ${i.map(e=>{let t=r===e.code;return`
              <a href="${e.path}" 
                 class="px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${t?`bg-[#c5a880] text-[#121413] font-semibold`:`text-stone-300 hover:text-white hover:bg-white/10`}">
                ${e.label}
              </a>
            `}).join(``)}
      </nav>
    `}};customElements.get(`language-switcher`)||customElements.define(`language-switcher`,n);var r=class extends HTMLElement{connectedCallback(){this.render(),this._hasLanguageListener||=(t.addEventListener(`languageLoaded`,()=>this.render()),!0)}render(){let e=(e,n)=>{let r=t.t(e),i=e.split(`.`).pop();return!r||typeof r!=`string`||r.startsWith(`[MISSING`)||r===i?n:r},n=[{categoryKey:`specs.area.category`,titleKey:`specs.area.title`,valueKey:`specs.area.value`,subtitleKey:`specs.area.subtitle`,defaultCategory:`POVRŠINA`,defaultTitle:`UKUPNA POVRŠINA`,defaultValue:`12 ha`,defaultSubtitle:`120,000 m²`,icon:`<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`},{categoryKey:`specs.forest.category`,titleKey:`specs.forest.title`,valueKey:`specs.forest.value`,subtitleKey:`specs.forest.subtitle`,defaultCategory:`TEREN`,defaultTitle:`ŠUMSKI POJAS`,defaultValue:`7.2 ha`,defaultSubtitle:`Autohtona crnogorična i bukova šuma`,icon:`<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L3 14h5v8h8v-8h5L12 2z"/></svg>`},{categoryKey:`specs.meadow.category`,titleKey:`specs.meadow.title`,valueKey:`specs.meadow.value`,subtitleKey:`specs.meadow.subtitle`,defaultCategory:`TEREN`,defaultTitle:`LIVADE & PAŠNJACI`,defaultValue:`4.8 ha`,defaultSubtitle:`Otvorene sunčane padine`,icon:`<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="1.5"/></svg>`},{categoryKey:`specs.elevation.category`,titleKey:`specs.elevation.title`,valueKey:`specs.elevation.value`,subtitleKey:`specs.elevation.subtitle`,defaultCategory:`TOPOGRAFIJA`,defaultTitle:`NADMORSKA VISINA`,defaultValue:`850 m.a.s.l.`,defaultSubtitle:`Panoramski pogledi i čist planinski vazduh`,icon:`<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`},{categoryKey:`specs.power.category`,titleKey:`specs.power.title`,valueKey:`specs.power.value`,subtitleKey:`specs.power.subtitle`,defaultCategory:`INFRASTRUKTURA`,defaultTitle:`ELEKTRIČNA MREŽA`,defaultValue:`Priključak na Placu`,defaultSubtitle:`Stabilno trofazno napajanje`,icon:`<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`},{categoryKey:`specs.water.category`,titleKey:`specs.water.title`,valueKey:`specs.water.value`,subtitleKey:`specs.water.subtitle`,defaultCategory:`INFRASTRUKTURA`,defaultTitle:`VODOSNABDEVANJE`,defaultValue:`Izvorski Priključak`,defaultSubtitle:`Sopstveni prirodni izvor čiste vode`,icon:`<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>`},{categoryKey:`specs.access.category`,titleKey:`specs.access.title`,valueKey:`specs.access.value`,subtitleKey:`specs.access.subtitle`,defaultCategory:`PRISTUP`,defaultTitle:`PRILAZNI PUT`,defaultValue:`Asfalt + 350m`,defaultSubtitle:`Uređen makadamski prilaz do imanja`,icon:`<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`},{categoryKey:`specs.legal.category`,titleKey:`specs.legal.title`,valueKey:`specs.legal.value`,subtitleKey:`specs.legal.subtitle`,defaultCategory:`PRAVNI STATUS`,defaultTitle:`VLASNIŠTVO`,defaultValue:`1/1 Uknjiženo`,defaultSubtitle:`Bez tereta i zabeležbi, čist vlasnički list`,icon:`<svg class="w-5 h-5 text-[#c5a880] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`}];this.innerHTML=`
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${n.map(t=>{let n=e(t.categoryKey,t.defaultCategory),r=e(t.titleKey,t.defaultTitle),i=e(t.valueKey,t.defaultValue),a=e(t.subtitleKey,t.defaultSubtitle);return`
              <div class="bg-white border border-stone-200/80 p-6 flex flex-col justify-between hover:border-[#c5a880] transition-all duration-300 shadow-sm hover:shadow-md min-w-0 overflow-hidden">
                <div>
                  <div class="flex justify-between items-start mb-4">
                    <span class="text-[10px] font-mono tracking-widest uppercase text-stone-400 truncate pr-2">
                      ${n}
                    </span>
                    ${t.icon}
                  </div>
                  <h3 class="text-[11px] font-semibold tracking-wider uppercase text-stone-600 mb-2 min-h-[1.75rem] leading-tight flex items-center">
                    ${r}
                  </h3>
                  <p class="text-xl sm:text-2xl lg:text-3xl font-serif text-[#121413] tracking-tight break-words leading-tight">
                    ${i}
                  </p>
                </div>
                <div class="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 leading-relaxed font-light break-words">
                  ${a}
                </div>
              </div>
            `}).join(``)}
      </div>
    `}};customElements.get(`spec-card`)||customElements.define(`spec-card`,r);var i=class extends HTMLElement{connectedCallback(){this.render(),this._hasLanguageListener||=(t.addEventListener(`languageLoaded`,()=>this.render()),!0)}render(){let e=(e,n)=>{let r=t.t(e),i=e.split(`.`).pop();return!r||typeof r!=`string`||r.startsWith(`[MISSING`)||r===i?n:r};this.innerHTML=`
      <div class="bg-[#121413] text-[#f8f7f4] p-8 sm:p-12 border-t-2 border-[#c5a880] shadow-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Form Header & Bullet Points -->
          <div class="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c5a880] block mb-3">
                ${e(`form.badge`,`PRAVNI I KATASTARSKI PODACI`)}
              </span>
              <h2 class="text-2xl sm:text-4xl font-serif text-white tracking-tight leading-snug">
                ${e(`form.title`,`Zatražite Pravni i Katastarski Elaborat`)}
              </h2>
              <p class="text-stone-400 text-sm mt-4 leading-relaxed font-light">
                ${e(`form.subtitle`,`Popunite formu za preuzimanje kompletnog vlasničkog lista, kopije plana i prostornog rešenja.`)}
              </p>
            </div>

            <div class="mt-8 pt-8 border-t border-stone-800 space-y-3">
              <div class="flex items-center gap-3 text-xs text-stone-300">
                <span class="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>${e(`form.direct_contact`,`Direktan kontakt sa vlasnikom`)}</span>
              </div>
              <div class="flex items-center gap-3 text-xs text-stone-300">
                <span class="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>${e(`form.discretion`,`Potpuna diskrecija i privatnost`)}</span>
              </div>
            </div>
          </div>

          <!-- Form Fields -->
          <div class="lg:col-span-7">
            <form id="estate-lead-form" class="space-y-6" onsubmit="event.preventDefault();">
              <div>
                <label class="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                  ${e(`form.label_name`,`VAŠE IME I PREZIME`)}
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="${e(`form.placeholder_name`,`npr. Marko Marković`)}"
                  class="w-full bg-stone-900/80 border border-stone-800 focus:border-[#c5a880] px-4 py-3.5 text-sm text-white placeholder-stone-600 outline-none transition-colors duration-200"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                    ${e(`form.label_email`,`VAŠ EMAIL`)}
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="${e(`form.placeholder_email`,`marko@domena.rs`)}"
                    class="w-full bg-stone-900/80 border border-stone-800 focus:border-[#c5a880] px-4 py-3.5 text-sm text-white placeholder-stone-600 outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label class="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                    ${e(`form.label_phone`,`TELEFON / WHATSAPP`)}
                  </label>
                  <input 
                    type="tel" 
                    placeholder="${e(`form.placeholder_phone`,`+381 6x xxx xxxx`)}"
                    class="w-full bg-stone-900/80 border border-stone-800 focus:border-[#c5a880] px-4 py-3.5 text-sm text-white placeholder-stone-600 outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label class="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                  ${e(`form.label_message`,`PORUKA ILI NAPOMENA (OPCIONO)`)}
                </label>
                <textarea 
                  rows="3" 
                  placeholder="${e(`form.placeholder_message`,`Unesite dodatna pitanja...`)}"
                  class="w-full bg-stone-900/80 border border-stone-800 focus:border-[#c5a880] px-4 py-3.5 text-sm text-white placeholder-stone-600 outline-none transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full bg-[#c5a880] hover:bg-white text-[#121413] font-semibold text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 shadow-md"
              >
                ${e(`form.submit_btn`,`POŠALJITE ZAHTEV`)}
              </button>
            </form>
          </div>

        </div>
      </div>
    `}};customElements.get(`contact-form`)||customElements.define(`contact-form`,i);var a=class extends HTMLElement{connectedCallback(){this.render(),this._hasLanguageListener||=(t.addEventListener(`languageLoaded`,()=>this.render()),!0)}render(){let e=(e,n)=>{let r=t.t(e),i=e.split(`.`).pop();return!r||typeof r!=`string`||r.startsWith(`[MISSING`)||r===i?n:r},n=new Date().getFullYear();this.innerHTML=`
      <footer class="border-t border-stone-200/60 bg-[#f8f7f4] py-12 text-stone-500 text-xs">
        <div class="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <p class="font-serif text-sm font-semibold text-[#121413]">
              ${e(`meta.title`,`Planinsko Šumsko Imanje`)}
            </p>
            <p class="text-stone-400 mt-1">
              ${e(`footer.location`,`Zapadna Srbija • 12 Hektara`)}
            </p>
          </div>
          
          <div class="text-center sm:text-right text-stone-400 space-y-1">
            <p>&copy; ${n} ${e(`footer.rights`,`Sva prava zadržana.`)}</p>
            <p class="text-[11px]">
              ${e(`footer.disclaimer`,`Direktna prodaja od vlasnika. Informacije su informativnog karaktera.`)}
            </p>
          </div>
        </div>
      </footer>
    `}};customElements.get(`app-footer`)||customElements.define(`app-footer`,a),document.addEventListener(`DOMContentLoaded`,async()=>{await t.init(),await o()});async function o(){let e=document.getElementById(`specs-container`);if(e)try{let{metrics:t,infrastructure:n,legal:r}=await(await fetch(`/woodland-estate/data/property-data.json`)).json();e.innerHTML=`
      <spec-card icon="📐" label-key="specs.total_area" raw-value="${t.total_area_ha} ha (${t.total_area_sqm.toLocaleString()} m²)"></spec-card>
      <spec-card icon="🌲" label-key="specs.forest_area" raw-value="${t.forest_area_ha} ha"></spec-card>
      <spec-card icon="🌱" label-key="specs.meadow_area" raw-value="${t.meadow_area_ha} ha"></spec-card>
      <spec-card icon="⛰️" label-key="specs.elevation" raw-value="${t.elevation_masl} m.a.s.l."></spec-card>
      <spec-card icon="⚡" label-key="specs.electricity" value-key="values.${n.electricity_connection}"></spec-card>
      <spec-card icon="💧" label-key="specs.water" value-key="values.${n.water_source}"></spec-card>
      <spec-card icon="🛣️" label-key="specs.road" value-key="values.${n.road_access}"></spec-card>
      <spec-card icon="📜" label-key="specs.ownership" value-key="values.${r.encumbrance_status}"></spec-card>
    `}catch(e){console.error(`Failed to load property data:`,e)}}