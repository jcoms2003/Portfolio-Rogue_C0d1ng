AOS.init({
    once: true, // Animation will only happen once when the element is scrolled into view
})
class DarkModeToggle {
    constructor() {
        this.toggleButton = document.getElementById('theme-toggle');
        this.toggleButton.addEventListener('click', () => this.toggleTheme());
        this.loadTheme();
    }

    toggleTheme() {
        const body = document.body;
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }
}

// Initialize the toggle
new DarkModeToggle();