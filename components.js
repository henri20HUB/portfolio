// Shared Navigation, Footer, Active Page Highlight, and Global Language Switcher
document.addEventListener("DOMContentLoaded", () => {
    
    // Get stored language or default to English
    let currentLang = localStorage.getItem("portfolio_lang") || "en";

    // Set root HTML class for CSS-based language switching
    document.documentElement.classList.remove("lang-en-active", "lang-de-active");
    document.documentElement.classList.add(`lang-${currentLang}-active`);

    // Detect active page file name
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // Helper for active link class rendering
    const getLinkClass = (pageName) => {
        const isActive = currentPath === pageName || (currentPath === "" && pageName === "index.html");
        return isActive 
            ? "text-white bg-white/10 border border-white/15 shadow-sm px-3 py-1 rounded-lg transition-all" 
            : "text-slate-400 hover:text-slate-100 hover:bg-white/5 px-3 py-1 rounded-lg transition-all";
    };

    // Shared Header (Discrete Liquid Glass & Active Link Highlighting)
    const headerHTML = `
    <header class="border-b border-white/[0.08] bg-darkBg/70 backdrop-blur-2xl sticky top-0 z-50 shadow-2xl shadow-black/40">
        <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="index.html" class="font-bold text-lg tracking-tight hover:text-accentBlue transition-colors flex items-center gap-2 group">
                <span class="w-2.5 h-2.5 rounded-full bg-accentBlue shadow-[0_0_12px_rgba(59,130,246,0.8)] group-hover:scale-125 transition-transform"></span>
                <span class="text-white tracking-tight">Henri Withöft</span>
            </a>
            <div class="flex items-center gap-4 sm:gap-6">
                <nav class="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
                    <a href="index.html" class="${getLinkClass('index.html')}">
                        <span class="lang-en">Home</span>
                        <span class="lang-de">Startseite</span>
                    </a>
                    <a href="experience.html" class="${getLinkClass('experience.html')}">
                        <span class="lang-en">Experience</span>
                        <span class="lang-de">Erfahrung</span>
                    </a>
                    <a href="projects.html" class="${getLinkClass('projects.html')}">
                        <span class="lang-en">Projects</span>
                        <span class="lang-de">Projekte</span>
                    </a>
                    <a href="future.html" class="${getLinkClass('future.html')}">
                        <span class="lang-en">Future</span>
                        <span class="lang-de">Zukunft</span>
                    </a>
                    <a href="contact.html" class="${getLinkClass('contact.html')}">
                        <span class="lang-en">Contact</span>
                        <span class="lang-de">Kontakt</span>
                    </a>
                </nav>
                
                <!-- Language Toggle Button with Liquid Glass Accent -->
                <button id="lang-toggle" title="Press Shift + L to toggle language" class="text-xs font-mono font-medium px-2.5 py-1 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-accentBlue/40 text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-inner group">
                    <span id="btn-lang-en" class="${currentLang === 'en' ? 'text-accentBlue font-bold' : 'text-slate-500'}">EN</span>
                    <span class="text-slate-600">|</span>
                    <span id="btn-lang-de" class="${currentLang === 'de' ? 'text-accentBlue font-bold' : 'text-slate-500'}">DE</span>
                    <kbd class="hidden sm:inline-block text-[9px] px-1 py-0.2 rounded bg-darkBg/80 border border-white/10 text-slate-500 group-hover:text-slate-300 transition-colors ml-1">⇧L</kbd>
                </button>
            </div>
        </div>
    </header>
    `;

    // Shared Footer
    const footerHTML = `
    <footer class="border-t border-white/[0.08] bg-darkBg/60 backdrop-blur-xl py-8 text-center text-xs text-slate-500 space-y-2 relative z-10">
        <p>&copy; 2026 Henri Withöft.</p>
        <p class="text-[11px] text-slate-500 max-w-md mx-auto px-4 leading-normal">
            <i class="fas fa-circle-info text-[10px] mr-1 text-slate-400"></i>
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
