# 🚀 QA Lead Portfolio

A modern, responsive, and interactive personal portfolio website designed for a QA Lead & Automation Expert. This project showcases professional experience, technical skills, and projects using a sleek "Glassmorphism" UI design.

## ✨ Key Features

*   **🎨 Glassmorphism Design:** Modern UI with translucent cards, blur effects, and smooth gradients.
*   **📱 Fully Responsive:** Optimized for all devices (Desktop, Tablet, Mobile) with specific layouts for each.
*   **🌓 Dark/Light Mode:** Seamless theme switching with persistent state and adaptive icons.
*   **⚡ Interactive Elements:**
    *   **Particles.js Background:** Dynamic, floating particle network.
    *   **AOS Animations:** Scroll-triggered fade and zoom effects.
    *   **Typed.js:** Dynamic text typing effect in the hero section.
*   **🛠 Tech Stack:** HTML5, CSS3 (Custom Variables), JavaScript (ES6+), Bootstrap 5.

## 📂 Project Structure

```text
/
├── index.html          # Main HTML structure (SEO optimized, semantic tags)
├── style.css           # Custom CSS (Glassmorphism, Theme Variables, Responsive overrides)
├── script.js           # Logic for Theme Toggle, Typing Effect, and Form Handling
└── src/
    └── icons/          # Directory for assets (e.g., my-sign.png)
```

## 🚀 Getting Started

1.  **Clone/Download** the repository.
2.  **Open `index.html`** in any modern web browser.
3.  **Customize:**
    *   **Logo:** Replace `src/icons/my-sign.png` with your own signature or logo.
    *   **Links:** Update `href` attributes for LinkedIn, Email, and Project links in `index.html`.
    *   **Form:** The contact form is set up for `Formspree`. Update the `action` URL in the `<form>` tag to receive emails.

## 🔧 Customization Guide

### Changing Theme Colors
Open `style.css` and modify the `:root` variables:
```css
:root {
    --primary-color: #0d6efd; /* Main Brand Color */
    --bg-body: #0f172a;       /* Dark Mode Background */
    /* ... other variables */
}
```

### Editing Content
*   **Hero Section:** Edit the `data-typed-items` attribute in `index.html` to change the typing text.
*   **Experience/Skills:** Update the timeline and skill cards directly in the HTML structure.

## 📱 Mobile Specifics
*   **Social Icons:** Automatically move to the navbar on mobile for easy access.
*   **Timeline:** Transforms into a left-aligned, touch-friendly vertical timeline.
*   **Theme Toggle:** A dedicated button appears on the navbar for quick theme switching.

## 🤝 Contributing
Feel free to fork this project and submit pull requests for any enhancements or bug fixes.

---
*Created by Sandeep ARYA*
