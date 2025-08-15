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

let welcomeLang = 'ar';

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
}

document.addEventListener('DOMContentLoaded', function () {
    updateWelcomeUI();
    const select = document.getElementById('welcome-lang-switcher');
    if (select) {
        select.value = welcomeLang;
        select.addEventListener('change', function () {
            welcomeLang = this.value;
            updateWelcomeUI();
        });
    }
});