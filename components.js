// Shared Header, Footer, and i18n Language Selector
document.addEventListener("DOMContentLoaded", () => {
    
    // Translation Data for Shared Components
    const translations = {
        en: {
            navHome: "Home",
            navProjects: "Projects",
            navExperience: "Experience",
            navFuture: "Future",
            navContact: "Contact",
            disclaimerText: "Information on this personal portfolio is updated periodically and provided for reference. For official academic records, please reach out directly."
        },
        de: {
            navHome: "Startseite",
            navProjects: "Projekte",
            navExperience: "Erfahrung",
            navFuture: "Zukunft",
            navContact: "Kontakt",
            disclaimerText: "Informationen auf diesem persönlichen Portfolio werden regelmäßig aktualisiert und dienen der Orientierung. Für offizielle akademische Nachweise bitten wir um direkte Kontaktaufnahme."
        }
    };

    // Get current stored language preference (default: 'en')
    let currentLang = localStorage.getItem("portfolio_lang") || "en";

    // Reusable Navigation Bar HTML
    const headerHTML = `
    <header class="border-b border-borderSubtle bg-darkBg/80 backdrop-blur-xl sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="index.html" class="font-bold text-lg tracking-tight hover:text-accentBlue transition-colors flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-accentBlue animate-ping"></span>
                Henri Withöft
            </a>
            <div class="flex items-center gap-6">
                <nav class="flex items-center gap-5 text-sm font-medium text-slate-400">
                    <a href="index.html" data-i18n="navHome" class="hover:text-slate-100 transition-colors">${translations[currentLang].navHome}</a>
                    <a href="projects.html" data-i18n="navProjects" class="hover:text-slate-100 transition-colors">${translations[currentLang].navProjects}</a>
                    <a href="experience.html" data-i18n="navExperience" class="hover:text-slate-100 transition-colors">${translations[currentLang].navExperience}</a>
                    <a href="future.html" data-i18n="navFuture" class="hover:text-slate-100 transition-colors">${translations[currentLang].navFuture}</a>
                    <a href="contact.html" data-i18n="navContact" class="hover:text-slate-100 transition-colors">${translations[currentLang].navContact}</a>
                </nav>
                
                <!-- Language Toggle Button -->
                <button id="lang-toggle" class="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-cardBg border border-borderSubtle text-slate-300 hover:border-accentBlue/50 transition-all flex items-center gap-1">
                    <span id="lang-en" class="${currentLang === 'en' ? 'text-accentBlue font-bold' : 'text-slate-500'}">EN</span>
                    <span class="text-slate-600">|</span>
                    <span id="lang-de" class="${currentLang === 'de' ? 'text-accentBlue font-bold' : 'text-slate-500'}">DE</span>
                </button>
            </div>
        </div>
    </header>
    `;

    // Reusable Footer HTML
    const footerHTML = `
    <footer class="border-t border-borderSubtle py-8 text-center text-xs text-slate-500 space-y-2 relative z-10">
        <p>&copy; 2026 Henri Withöft.</p>
        <p class="text-[11px] text-slate-600 max-w-md mx-auto px-4 leading-normal" data-i18n="disclaimerText">
            <i class="fas fa-circle-info text-[10px] mr-1"></i>
            ${translations[currentLang].disclaimerText}
        </p>
    </footer>
    `;

    // Inject Navigation and Footer
    const navElement = document.getElementById("navbar");
    const footerElement = document.getElementById("footer");

    if (navElement) navElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;

    // Toggle Button Event Handler
    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "de" : "en";
            localStorage.setItem("portfolio_lang", currentLang);
            
            // Re-render UI with new language
            applyLanguage(currentLang);
        });
    }

    function applyLanguage(lang) {
        // Update Nav Active States
        document.getElementById("lang-en").className = lang === 'en' ? 'text-accentBlue font-bold' : 'text-slate-500';
        document.getElementById("lang-de").className = lang === 'de' ? 'text-accentBlue font-bold' : 'text-slate-500';

        // Update elements with data-i18n attributes
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                if (key === "disclaimerText") {
                    el.innerHTML = `<i class="fas fa-circle-info text-[10px] mr-1"></i> ${translations[lang][key]}`;
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Trigger custom event so page-specific content can translate if needed
        window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
    }
});
