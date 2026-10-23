// Shared Navigation, Footer, Global Language Switcher & Liquid Glass Active Tracker
document.addEventListener("DOMContentLoaded", () => {
    
    // Get stored language or default to English
    let currentLang = localStorage.getItem("portfolio_lang") || "en";

    // Set root HTML class for CSS-based language switching
    document.documentElement.classList.remove("lang-en-active", "lang-de-active");
    document.documentElement.classList.add(`lang-${currentLang}-active`);

    // Identify active directory page
    const pathname = window.location.pathname;
    let pageName = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (!pageName || pageName === "/") pageName = "index.html";

    // Navigation Item Helper with Active Highlight & Glass States
    const getNavClass = (targetPage) => {
        const isActive = pageName === targetPage;
        return isActive 
            ? "px-3 py-1.5 rounded-lg bg-accentBlue/15 text-slate-100 border border-accentBlue/30 font-semibold shadow-sm transition-all flex items-center gap-1.5"
            : "px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all flex items-center gap-1.5";
    };

    const getActiveDot = (targetPage) => {
        return pageName === targetPage ? `<span class="w-1.5 h-1.5 rounded-full bg-accentBlue animate-pulse"></span>` : ``;
    };

    // Shared Header (Liquid Glass Aesthetic + Active Directory Tracking)
    const headerHTML = `
    <header class="border-b border-white/10 bg-darkBg/70 backdrop-blur-2xl sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="index.html" class="font-bold text-lg tracking-tight hover:text-accentBlue transition-colors flex items-center gap-2 group">
                <span class="w-2.5 h-2.5 rounded-full bg-accentBlue group-hover:scale-125 transition-transform shadow-[0_0_10px_#3b82f6]"></span>
                <span class="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">Henri Withöft</span>
            </a>
            <div class="flex items-center gap-6">
                <nav class="flex items-center gap-1 text-sm font-medium">
                    <a href="index.html" class="${getNavClass('index.html')}">
                        ${getActiveDot('index.html')}
                        <span class="lang-en">Home</span>
                        <span class="lang-de">Startseite</span>
                    </a>
                    <a href="experience.html" class="${getNavClass('experience.html')}">
                        ${getActiveDot('experience.html')}
                        <span class="lang-en">Experience</span>
                        <span class="lang-de">Erfahrung</span>
                    </a>
                    <a href="projects.html" class="${getNavClass('projects.html')}">
                        ${getActiveDot('projects.html')}
                        <span class="lang-en">Projects</span>
                        <span class="lang-de">Projekte</span>
                    </a>
                    <a href="future.html" class="${getNavClass('future.html')}">
                        ${getActiveDot('future.html')}
                        <span class="lang-en">Future</span>
                        <span class="lang-de">Zukunft</span>
                    </a>
                    <a href="contact.html" class="${getNavClass('contact.html')}">
                        ${getActiveDot('contact.html')}
                        <span class="lang-en">Contact</span>
                        <span class="lang-de">Kontakt</span>
                    </a>
                </nav>
                
                <!-- Toggle Button with Specular Glass Effect -->
                <button id="lang-toggle" title="Press Shift + L to toggle language" class="text-xs font-mono font-medium px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-inner backdrop-blur-md group">
                    <span id="btn-lang-en" class="${currentLang === 'en' ? 'text-accentBlue font-bold' : 'text-slate-500'}">EN</span>
                    <span class="text-slate-600">|</span>
                    <span id="btn-lang-de" class="${currentLang === 'de' ? 'text-accentBlue font-bold' : 'text-slate-500'}">DE</span>
                    <kbd class="hidden sm:inline-block text-[9px] px-1 py-0.2 rounded bg-darkBg/80 border border-white/10 text-slate-500 group-hover:text-slate-300 transition-colors ml-0.5">⇧L</kbd>
                </button>
            </div>
        </div>
    </header>
    `;

    // Shared Footer
    const footerHTML = `
    <footer class="border-t border-white/10 py-8 text-center text-xs text-slate-500 space-y-2 relative z-10 bg-darkBg/40 backdrop-blur-md">
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

// Keyboard Shortcut Listener: Shift + L to toggle language anywhere on the site
document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key.toLowerCase() === "l") {
        const toggleBtn = document.getElementById("lang-toggle");
        if (toggleBtn) toggleBtn.click();
    }
});
