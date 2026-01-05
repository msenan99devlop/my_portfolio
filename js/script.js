// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    htmlElement.classList.toggle('dark', currentTheme === 'dark');
    updateThemeUI(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';
            
            htmlElement.classList.toggle('dark', newTheme === 'dark');
            localStorage.setItem('theme', newTheme);
            updateThemeUI(newTheme);
        });
    }

    function updateThemeUI(theme) {
        const icon = document.getElementById('theme-icon');
        const text = document.getElementById('theme-text');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        if (text) {
            text.textContent = theme === 'dark' ? 'Light' : 'Dark';
        }
    }

    // Loading Screen
    setTimeout(() => {
        const loading = document.getElementById('loading-screen');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 800);
        }
    }, 1200);

    // Contact Form
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }

    // Typed.js for home page
    if (document.querySelector('.typing')) {
        const typed = new Typed('.typing', {
            strings: [
                'Full-Stack Developer',
                'Data Analyst',
                'Graphic Designer',
                'Web Developer'
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
});