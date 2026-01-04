document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize AOS
    AOS.init({ once: true, offset: 50, duration: 800 });

    // 2. Initialize Typed.js
    new Typed('#typed-text', {
        strings: ['Quality Engineering Lead.', 'Payment Specialist.', 'Automation Engineer.', 'Tech Enthusiast.'],
        typeSpeed: 50, backSpeed: 30, loop: true, backDelay: 2000
    });

    // 3. Theme Toggle & Particles Logic
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    /* 4. Particles.js Initialization based on Theme
       - Dark Mode: White particles (#ffffff)
       - Light Mode: Blue particles (#0d6efd) with Dark lines (#212529) for better contrast
    */
    function loadParticles(theme) {
        let particleColor, linkColor;

        if (theme === 'dark') {
            particleColor = '#ffffff'; // White dots
            linkColor = '#ffffff';     // White lines
        } else {
            particleColor = '#0d6efd'; // Bootstrap Primary Blue dots (High Visibility)
            linkColor = '#212529';     // Dark Gray lines (High Contrast)
        }

        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": particleColor },
                "shape": {
                    "type": "circle", // You can change this to "edge" or "triangle" for variety
                    "stroke": { "width": 0, "color": "#000000" }
                },
                "opacity": { "value": 0.5, "random": false }, // Increased opacity for visibility
                "size": { "value": 4, "random": true }, // Slightly larger dots
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": linkColor,
                    "opacity": 0.4, // Darker lines in light mode
                    "width": 1
                },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // Check saved preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    updateIcon(savedTheme);
    loadParticles(savedTheme);

    // Toggle Click Event
    toggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        updateIcon(newTheme);

        // Brief timeout ensures CSS transition finishes before redrawing canvas
        setTimeout(() => {
            loadParticles(newTheme);
        }, 50);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        } else {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        }
    }
});

// 5. Smooth animation for "View Code" Buttons
document.addEventListener('DOMContentLoaded', () => {

    let activeCollapse = null; // Tracks currently open message
    let timer = null;          // Tracks auto-hide timer

    document.querySelectorAll('.view-code-btn-1').forEach(button => {

        button.addEventListener('click', () => {

            const collapseSelector = button.getAttribute('data-collapse');
            const target = document.querySelector(collapseSelector);
            const collapseInstance = bootstrap.Collapse.getOrCreateInstance(target);

            // Close previous open message
            if (activeCollapse && activeCollapse !== collapseInstance) {
                activeCollapse.hide();
            }

            // Clear old timer
            clearTimeout(timer);

            // Show current message
            collapseInstance.show();
            activeCollapse = collapseInstance;

            // Auto-hide after 3 seconds
            timer = setTimeout(() => {
                collapseInstance.hide();
                activeCollapse = null;
            }, 3000);
        });
    });

});


// 5.1 Smooth animation of icons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.view-code-btn-2').forEach(button => {
        button.addEventListener('click', () => {

            // Close all other open messages
            document.querySelectorAll('.code-message.show').forEach(openMsg => {
                bootstrap.Collapse.getOrCreateInstance(openMsg).hide();
            });

            const target = document.querySelector(button.dataset.bsTarget);
            const collapse = bootstrap.Collapse.getOrCreateInstance(target);
            const icon = target.querySelector('.animated-icon');

            // Show message
            collapse.show();
            if (icon) icon.style.animationPlayState = 'running';

            // Auto-hide after 3 seconds
            setTimeout(() => {
                collapse.hide();
                if (icon) icon.style.animationPlayState = 'paused';
            }, 3000);
        });
    });
});

// 5.3 Smooth animation of icons - Pause animation when collapsed
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.view-code-btn');
    if (!btn) return;

    const container = btn.closest('.mt-auto');
    const msg = container.nextElementSibling;
    if (!msg) return;

    // Clear any existing timeout
    if (msg.hideTimeout) {
        clearTimeout(msg.hideTimeout);
    }

    // Show message
    msg.classList.remove('d-none');
    requestAnimationFrame(() => msg.classList.add('show'));

    // Auto hide after 3s
    msg.hideTimeout = setTimeout(() => {
        msg.classList.remove('show');
        setTimeout(() => msg.classList.add('d-none'), 300);
    }, 3000);
});

// 6. View Code Button Logic with Auto - Hide
function showMessage(btn) {
    const container = btn.closest('.mt-auto');
    const msg = container.nextElementSibling;

    if (!msg) return;

    msg.classList.remove('d-none');
    setTimeout(() => msg.classList.add('d-none'), 3000);
}
window.showMessage = showMessage;

// 7. Contact Form Submission Handling
document.addEventListener("click", function (e) {
    const btn = e.target.closest(".send-msg-btn");
    if (!btn) return;

    const msg = btn.nextElementSibling;
    if (!msg) return;

    // Prevent stacked timers
    if (msg.hideTimeout) {
        clearTimeout(msg.hideTimeout);
    }

    // Show message
    msg.classList.remove("d-none");

    // Auto hide after 3 seconds
    msg.hideTimeout = setTimeout(() => {
        msg.classList.add("d-none");
    }, 3000);
});

// 8. Floating Label Animation Enhancement
document.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => {
        const label = el.nextElementSibling;
        if (el.value) {
            label.classList.add('floating');
        } else {
            label.classList.remove('floating');
        }
    });
});

// 9. Auto-Close Mobile Navbar on Click (Links + Theme Toggle)
const navbarCollapse = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

// Select nav links AND the theme toggle button
const navItems = document.querySelectorAll('.nav-link, #theme-toggle');

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Check if the navbar is actually open (has class 'show')
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
});

