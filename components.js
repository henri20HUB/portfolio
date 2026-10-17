// Shared Navigation, Footer, and Global Language Switcher
document.addEventListener("DOMContentLoaded", () => {
    
    // Get stored language or default to English
    let currentLang = localStorage.getItem("portfolio_lang") || "en";

    // Set root HTML class for CSS-based language switching
    document.documentElement.classList.remove("lang-en-active", "lang-de-active");
    document.documentElement.classList.add(`lang-${currentLang}-active`);

    // Shared Header
    const headerHTML = `
    <header class="border-b border-borderSubtle bg-darkBg/80 backdrop-blur-xl sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="index.html" class="font-bold text-lg tracking-tight hover:text-accentBlue transition-colors flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-accentBlue animate-ping"></span>
                Henri Withöft
            </a>
            <div class="flex items-center gap-6">
                <nav class="flex items-center gap-5 text-sm font-medium text-slate-400">
                    <a href="index.html" class="hover:text-slate-100 transition-colors">
                        <span class="lang-en">Home</span>
                        <span class="lang-de">Startseite</span>
                    </a>
                    <a href="projects.html" class="hover:text-slate-100 transition-colors">
                        <span class="lang-en">Projects</span>
                        <span class="lang-de">Projekte</span>
                    </a>
                    <a href="experience.html" class="hover:text-slate-100 transition-colors">
                        <span class="lang-en">Experience</span>
                        <span class="lang-de">Erfahrung</span>
                    </a>
                    <a href="future.html" class="hover:text-slate-100 transition-colors">
                        <span class="lang-en">Future</span>
                        <span class="lang-de">Zukunft</span>
                    </a>
                    <a href="contact.html" class="hover:text-slate-100 transition-colors">
                        <span class="lang-en">Contact</span>
                        <span class="lang-de">Kontakt</span>
                    </a>
                </nav>
                
                <!-- Toggle Button -->
                <button id="lang-toggle" class="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-cardBg border border-borderSubtle text-slate-300 hover:border-accentBlue/50 transition-all flex items-center gap-1 cursor-pointer">
                    <span id="btn-lang-en" class="${currentLang === 'en' ? 'text-accentBlue font-bold' : 'text-slate-500'}">EN</span>
                    <span class="text-slate-600">|</span>
                    <span id="btn-lang-de" class="${currentLang === 'de' ? 'text-accentBlue font-bold' : 'text-slate-500'}">DE</span>
                </button>
            </div>
        </div>
    </header>
    `;

    // Shared Footer
    const footerHTML = `
    <footer class="border-t border-borderSubtle py-8 text-center text-xs text-slate-500 space-y-2 relative z-10">
        <p>&copy; 2026 Henri Withöft.</p>
        <p class="text-[11px] text-slate-600 max-w-md mx-auto px-4 leading-normal">
            <i class="fas fa-circle-info text-[10px] mr-1"></i>
            <span class="lang-en">Information on this personal portfolio is updated periodically and provided for reference. For official academic records, please reach out directly.</span>
            <span class="lang-de">Informationen auf diesem persönlichen Portfolio werden regelmäßig aktualisiert und dienen der Orientierung. Für offizielle akademische Nachweise bitten wir um direkte Kontaktaufnahme.</span>
        </p>
    </footer>
    `;

    const navElement = document.getElementById("navbar");
    const footerElement = document.getElementById("footer");

    if (navElement) navElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;

    // Attach Language Switcher Logic
    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "de" : "en";
            localStorage.setItem("portfolio_lang", currentLang);
            
            // Update HTML Root Classes
            document.documentElement.classList.remove("lang-en-active", "lang-de-active");
            document.documentElement.classList.add(`lang-${currentLang}-active`);

            // Update Toggle Button Labels
            document.getElementById("btn-lang-en").className = currentLang === 'en' ? 'text-accentBlue font-bold' : 'text-slate-500';
            document.getElementById("btn-lang-de").className = currentLang === 'de' ? 'text-accentBlue font-bold' : 'text-slate-500';
        });
    }
});
