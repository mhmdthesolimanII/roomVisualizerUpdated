// Translations for the welcome page
const welcomeTranslations = {
    ar: {
        title: 'مرحباً بك في محاكي ألوان الغرف',
        description: 'هذا التطبيق يسمح لك بمحاكاة ألوان الحوائط وإضافة الأثاث لرؤية الشكل النهائي لغرفتك.',
        getStarted: 'ابدأ الآن'
    },
    en: {
        title: 'Welcome to the Bedroom Color Visualizer',
        description: 'This application allows you to simulate wall colors and add furniture to see the final look of your room.',
        getStarted: 'Get Started'
    }
};

// Determine language preference from localStorage if available, default to Arabic
let welcomeLang = 'ar';
const storedLang = localStorage.getItem('lang');
if (storedLang && welcomeTranslations[storedLang]) {
    welcomeLang = storedLang;
}

function updateWelcomeUI() {
    const titleEl = document.getElementById('welcome-title');
    if (titleEl) titleEl.textContent = welcomeTranslations[welcomeLang].title;
    const descEl = document.getElementById('welcome-description');
    if (descEl) descEl.textContent = welcomeTranslations[welcomeLang].description;
    const btnEl = document.getElementById('get-started-btn');
    if (btnEl) btnEl.textContent = welcomeTranslations[welcomeLang].getStarted;
    // Update html language and direction
    document.documentElement.lang = welcomeLang;
    document.documentElement.dir = (welcomeLang === 'ar') ? 'rtl' : 'ltr';

    // Update active state of language buttons if they exist
    const arBtn = document.getElementById('lang-btn-ar');
    const enBtn = document.getElementById('lang-btn-en');
    if (arBtn && enBtn) {
        if (welcomeLang === 'ar') {
            arBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            enBtn.classList.add('active');
            arBtn.classList.remove('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateWelcomeUI();
    // Set up click handlers for language buttons
    const arBtn = document.getElementById('lang-btn-ar');
    const enBtn = document.getElementById('lang-btn-en');
    if (arBtn) {
        arBtn.addEventListener('click', function () {
            welcomeLang = 'ar';
            // Store language preference so the main app can use it
            localStorage.setItem('lang', welcomeLang);
            updateWelcomeUI();
        });
    }
    if (enBtn) {
        enBtn.addEventListener('click', function () {
            welcomeLang = 'en';
            localStorage.setItem('lang', welcomeLang);
            updateWelcomeUI();
        });
    }
});