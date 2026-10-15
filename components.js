// Shared Header and Footer Components
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Reusable Navigation Bar
    const headerHTML = `
    <header class="border-b border-borderSubtle bg-darkBg/80 backdrop-blur-xl sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="index.html" class="font-bold text-lg tracking-tight hover:text-accentBlue transition-colors flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-accentBlue animate-ping"></span>
                Henri Withöft
            </a>
            <nav class="flex items-center gap-6 text-sm font-medium text-slate-400">
                <a href="index.html" class="hover:text-slate-100 transition-colors">Home</a>
                <a href="projects.html" class="hover:text-slate-100 transition-colors">Projects</a>
                <a href="experience.html" class="hover:text-slate-100 transition-colors">Experience</a>
                <a href="future.html" class="hover:text-slate-100 transition-colors">Future</a>
                <a href="contact.html" class="hover:text-slate-100 transition-colors">Contact</a>
            </nav>
        </div>
    </header>
    `;

    // 2. Reusable Footer with Disclaimer
    const footerHTML = `
    <footer class="border-t border-borderSubtle py-8 text-center text-xs text-slate-500 space-y-2 relative z-10">
        <p>&copy; 2026 Henri Withöft.</p>
        <p class="text-[11px] text-slate-600 max-w-md mx-auto px-4 leading-normal">
            <i class="fas fa-circle-info text-[10px] mr-1"></i>
            Information on this personal portfolio is updated periodically and provided for reference. For official academic records, please reach out directly.
        </p>
        <div class="flex items-center justify-between pt-2 border-t border-borderSubtle/60">
            <div class="flex flex-wrap gap-2">
                <span class="px-2.5 py-1 rounded-md bg-darkBg border border-borderSubtle text-slate-300 text-xs font-mono"><i class="fab fa-git-alt text-red-400 mr-1"></i>Git</span>
                <span class="px-2.5 py-1 rounded-md bg-darkBg border border-borderSubtle text-slate-300 text-xs font-mono"><i class="fas fa-cloud text-accentBlue mr-1"></i>Vercel</span>
            </div>
            <a href="https://github.com/henri20HUB" target="_blank" class="text-xs text-accentBlue hover:text-blue-400 transition-colors inline-flex items-center gap-1 font-medium">
                Repository <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
        </div>
    </footer>
    `;

    // Inject into placeholders
    const navElement = document.getElementById("navbar");
    const footerElement = document.getElementById("footer");

    if (navElement) navElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;
});
