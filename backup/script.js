document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Scroll Animations
    AOS.init({
        once: true, // Animation happens only once
        offset: 100, // Offset (in px) from the original trigger point
        duration: 800, // Duration of animation
    });

    // 2. Initialize Typed.js (Typewriter effect)
    new Typed('#typed-text', {
        strings: ['Quality Engineering Lead.', 'Payment Specialist.', 'Python Automator.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000
    });

    // 3. Initialize Particles.js (Background effect)
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "opacity": { "value": 0.2, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
            "modes": { "repulse": { "distance": 100, "duration": 0.4 } }
        },
        "retina_detect": true
    });

    // 4. Dark/Light Mode Toggle Logic
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    toggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-bs-theme', newTheme);

        // Toggle Icon
        if (newTheme === 'light') {
            themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            // Adjust body background for light mode manually if needed
            document.body.style.backgroundColor = '#f8f9fa';
            document.body.style.color = '#212529';
        } else {
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            document.body.style.backgroundColor = '#0f172a';
            document.body.style.color = '#e2e8f0';
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

});
