document.addEventListener('DOMContentLoaded', function() {
    /* ==== Theme Toggle Functionality ==== */
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    // Initialize theme from localStorage, default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.classList.toggle('dark', currentTheme === 'dark');
    updateThemeUI(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';

            htmlElement.classList.toggle('dark');
            localStorage.setItem('theme', newTheme);
            updateThemeUI(newTheme);

            // Optional: Send AJAX request to save theme in session (requires Axios)
            if (typeof axios !== 'undefined') {
                axios.post('/theme-toggle', { theme: newTheme })
                    .catch(error => console.error('Failed to save theme:', error));
            }
        });
    }

    // Updates the icon and text of the theme toggle button
    function updateThemeUI(theme) {
        const icon = document.getElementById('theme-icon');
        const text = document.getElementById('theme-text');
        if (icon) {
            // Original logic: sun icon for dark mode, moon for light mode
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        if (text) {
            text.textContent = theme === 'dark' ? 'Light' : 'Dark';
        }
    }

    /* ==== Contact Form Submission (Placeholder) ==== */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // This alert is a placeholder and should be replaced by an AJAX submission
            // to your ContactController or similar backend endpoint.
            alert('Thank you for your message! I will get back to you soon.');
            form.reset(); // Reset form fields after submission
        });
    }

    /* ==== Typed.js for Dynamic Text Display ==== */
    // Checks if an element with the class 'typing' exists before initializing Typed.js
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

/* ==== Loading Screen Animation (Hides after full page load with minimum display duration) ==== */
let pageLoaded = false;
let minTimeElapsed = false;
const minDisplayDuration = 700; // UPDATED: Minimum 3 seconds for the loading screen to be visible (in milliseconds)

const hideLoadingScreen = () => {
    if (pageLoaded && minTimeElapsed) {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            // Wait for CSS transition (duration-500 = 0.5s) to complete before setting display to none
            loadingScreen.addEventListener('transitionend', function handler() {
                loadingScreen.style.display = 'none';
                loadingScreen.removeEventListener('transitionend', handler); // Clean up listener
            }, { once: true }); // Ensure this listener runs only once
        }
    }
};

window.addEventListener('load', () => {
    pageLoaded = true;
    hideLoadingScreen();
});

// Set a timeout for the minimum display duration
setTimeout(() => {
    minTimeElapsed = true;
    hideLoadingScreen();
}, minDisplayDuration);