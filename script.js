// document.addEventListener('DOMContentLoaded', () => {

//     // 1. Initialize AOS
//     AOS.init({ once: true, offset: 50, duration: 800 });

//     // 2. Initialize Typed.js
//     new Typed('#typed-text', {
//         strings: ['Quality Engineering Lead.', 'Payment Specialist.', 'Automation Engineer.'],
//         typeSpeed: 50, backSpeed: 30, loop: true, backDelay: 2000
//     });

//     // 3. Theme Toggle & Particles Logic
//     const toggleButton = document.getElementById('theme-toggle');
//     const themeIcon = document.getElementById('theme-icon');
//     const htmlElement = document.documentElement;

//     /* 4. Particles.js Initialization based on Theme
//        - Dark Mode: White particles (#ffffff)
//        - Light Mode: Blue particles (#0d6efd) with Dark lines (#212529) for better contrast
//     */
//     function loadParticles(theme) {
//         let particleColor, linkColor;

//         if (theme === 'dark') {
//             particleColor = '#ffffff'; // White dots
//             linkColor = '#ffffff';     // White lines
//         } else {
//             particleColor = '#0d6efd'; // Bootstrap Primary Blue dots (High Visibility)
//             linkColor = '#212529';     // Dark Gray lines (High Contrast)
//         }

//         particlesJS("particles-js", {
//             "particles": {
//                 "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
//                 "color": { "value": particleColor },
//                 "shape": {
//                     "type": "circle", // You can change this to "edge" or "triangle" for variety
//                     "stroke": { "width": 0, "color": "#000000" }
//                 },
//                 "opacity": { "value": 0.5, "random": false }, // Increased opacity for visibility
//                 "size": { "value": 4, "random": true }, // Slightly larger dots
//                 "line_linked": {
//                     "enable": true,
//                     "distance": 150,
//                     "color": linkColor,
//                     "opacity": 0.4, // Darker lines in light mode
//                     "width": 1
//                 },
//                 "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
//             },
//             "interactivity": {
//                 "detect_on": "canvas",
//                 "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
//                 "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
//             },
//             "retina_detect": true
//         });
//     }

//     // Check saved preference or default to dark
//     const savedTheme = localStorage.getItem('theme') || 'dark';
//     htmlElement.setAttribute('data-bs-theme', savedTheme);
//     updateIcon(savedTheme);
//     loadParticles(savedTheme);

//     // Toggle Click Event
//     toggleButton.addEventListener('click', () => {
//         const currentTheme = htmlElement.getAttribute('data-bs-theme');
//         const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

//         htmlElement.setAttribute('data-bs-theme', newTheme);
//         localStorage.setItem('theme', newTheme);

//         updateIcon(newTheme);

//         // Brief timeout ensures CSS transition finishes before redrawing canvas
//         setTimeout(() => {
//             loadParticles(newTheme);
//         }, 50);
//     });

//     function updateIcon(theme) {
//         if (theme === 'dark') {
//             themeIcon.classList.remove('bi-sun-fill');
//             themeIcon.classList.add('bi-moon-fill');
//         } else {
//             themeIcon.classList.remove('bi-moon-fill');
//             themeIcon.classList.add('bi-sun-fill');
//         }
//     }
// });

// // 5. Smooth animation for "View Code" Buttons
// document.addEventListener('DOMContentLoaded', () => {

//     let activeCollapse = null; // Tracks currently open message
//     let timer = null;          // Tracks auto-hide timer

//     document.querySelectorAll('.view-code-btn-1').forEach(button => {

//         button.addEventListener('click', () => {

//             const collapseSelector = button.getAttribute('data-collapse');
//             const target = document.querySelector(collapseSelector);
//             const collapseInstance = bootstrap.Collapse.getOrCreateInstance(target);

//             // Close previous open message
//             if (activeCollapse && activeCollapse !== collapseInstance) {
//                 activeCollapse.hide();
//             }

//             // Clear old timer
//             clearTimeout(timer);

//             // Show current message
//             collapseInstance.show();
//             activeCollapse = collapseInstance;

//             // Auto-hide after 3 seconds
//             timer = setTimeout(() => {
//                 collapseInstance.hide();
//                 activeCollapse = null;
//             }, 3000);
//         });
//     });

// });


// // 5.1 Smooth animation of icons
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.view-code-btn-2').forEach(button => {
//         button.addEventListener('click', () => {

//             // Close all other open messages
//             document.querySelectorAll('.code-message.show').forEach(openMsg => {
//                 bootstrap.Collapse.getOrCreateInstance(openMsg).hide();
//             });

//             const target = document.querySelector(button.dataset.bsTarget);
//             const collapse = bootstrap.Collapse.getOrCreateInstance(target);
//             const icon = target.querySelector('.animated-icon');

//             // Show message
//             collapse.show();
//             if (icon) icon.style.animationPlayState = 'running';

//             // Auto-hide after 3 seconds
//             setTimeout(() => {
//                 collapse.hide();
//                 if (icon) icon.style.animationPlayState = 'paused';
//             }, 3000);
//         });
//     });
// });

// // 5.3 Smooth animation of icons - Pause animation when collapsed
// document.addEventListener('click', function (e) {
//     const btn = e.target.closest('.view-code-btn');
//     if (!btn) return;

//     const container = btn.closest('.mt-auto');
//     const msg = container.nextElementSibling;
//     if (!msg) return;

//     // Clear any existing timeout
//     if (msg.hideTimeout) {
//         clearTimeout(msg.hideTimeout);
//     }

//     // Show message
//     msg.classList.remove('d-none');
//     requestAnimationFrame(() => msg.classList.add('show'));

//     // Auto hide after 3s
//     msg.hideTimeout = setTimeout(() => {
//         msg.classList.remove('show');
//         setTimeout(() => msg.classList.add('d-none'), 300);
//     }, 3000);
// });

// // 6. View Code Button Logic with Auto - Hide
// function showMessage(btn) {
//     const container = btn.closest('.mt-auto');
//     const msg = container.nextElementSibling;

//     if (!msg) return;

//     msg.classList.remove('d-none');
//     setTimeout(() => msg.classList.add('d-none'), 3000);
// }
// window.showMessage = showMessage;

// // 7. Contact Form Submission Handling
// document.addEventListener("click", function (e) {
//     const btn = e.target.closest(".send-msg-btn");
//     if (!btn) return;

//     const msg = btn.nextElementSibling;
//     if (!msg) return;

//     // Prevent stacked timers
//     if (msg.hideTimeout) {
//         clearTimeout(msg.hideTimeout);
//     }

//     // Show message
//     msg.classList.remove("d-none");

//     // Auto hide after 3 seconds
//     msg.hideTimeout = setTimeout(() => {
//         msg.classList.add("d-none");
//     }, 3000);
// });

// // 8. Floating Label Animation Enhancement
// document.querySelectorAll('input, textarea').forEach(el => {
//     el.addEventListener('input', () => {
//         const label = el.nextElementSibling;
//         if (el.value) {
//             label.classList.add('floating');
//         } else {
//             label.classList.remove('floating');
//         }
//     });
// });

// // 9. Auto-Close Mobile Navbar on Click (Links + Theme Toggle)
// const navbarCollapse = document.getElementById('navbarNav');
// const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

// // Select nav links AND the theme toggle button
// const navItems = document.querySelectorAll('.nav-link, #theme-toggle');

// navItems.forEach((item) => {
//     item.addEventListener('click', () => {
//         // Check if the navbar is actually open (has class 'show')
//         if (navbarCollapse.classList.contains('show')) {
//             bsCollapse.hide();
//         }
//     });
// });


// // ==========================================
// // MOBILE THEME TOGGLE SYNC
// // ==========================================
// document.addEventListener('DOMContentLoaded', () => {
//     const mobileBtn = document.getElementById('theme-toggle-mobile');
//     const mobileIcon = document.getElementById('theme-icon-mobile');
//     const mainBtn = document.getElementById('theme-toggle');

//     // 1. Initial Sync
//     const currentTheme = document.documentElement.getAttribute('data-bs-theme');
//     if (mobileIcon) {
//         mobileIcon.className = currentTheme === 'light' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
//     }

//     // 2. Helper to update icon
//     const updateMobileIcon = () => {
//         const theme = document.documentElement.getAttribute('data-bs-theme');
//         if (mobileIcon) {
//             mobileIcon.className = theme === 'light' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
//         }
//     };

//     // 3. Mobile Click -> Trigger Main Click
//     if (mobileBtn && mainBtn) {
//         mobileBtn.addEventListener('click', () => {
//             mainBtn.click(); // Trigger existing logic
//             setTimeout(updateMobileIcon, 50); // Sync icon after transition
//         });
//     }

//     // 4. Main Click -> Sync Mobile Icon
//     if (mainBtn) {
//         mainBtn.addEventListener('click', () => {
//             setTimeout(updateMobileIcon, 50);
//         });
//     }
// });





/* Portfolio Core - Secure Production Version */
// document.addEventListener("DOMContentLoaded",(()=>{AOS.init({once:!0,offset:50,duration:800}),new Typed("#typed-text",{strings:["Quality Engineering Lead.","Payment Specialist.","Automation Engineer."],typeSpeed:50,backSpeed:30,loop:!0,backDelay:2e3});const e=document.getElementById("theme-toggle"),t=document.getElementById("theme-icon"),n=document.documentElement;function o(e){let t,o;"dark"===e?(t="#ffffff",o="#ffffff"):(t="#0d6efd",o="#212529"),particlesJS("particles-js",{particles:{number:{value:60,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.5,random:!1},size:{value:4,random:!0},line_linked:{enable:!0,distance:150,color:o,opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"}},modes:{grab:{distance:140,line_linked:{opacity:1}},push:{particles_nb:4}}},retina_detect:!0})}const a=localStorage.getItem("theme")||"dark";n.setAttribute("data-bs-theme",a),((e,o)=>{const a="dark"===e;o.className=a?"bi bi-moon-fill":"bi bi-sun-fill"})(a,t),o(a),e.addEventListener("click",(()=>{const a="dark"===n.getAttribute("data-bs-theme")?"light":"dark";n.setAttribute("data-bs-theme",a),localStorage.setItem("theme",a),((e,o)=>{const a="dark"===e;o.className=a?"bi bi-moon-fill":"bi bi-sun-fill"})(a,t),setTimeout((()=>o(a)),50)}));(()=>{const e={n:"U2FuZGVlcCBrdW1hciBBcnlh",e:"c2thcnlhMzFAZ21haWwuY29t",l:"https://www.linkedin.com/in/sandeep-kumar-arya/",s:"ISO 8583"},t=e=>atob(e),o=t(e.n),a=`mailto:${t(e.e)}`,n=`<a href="${e.l}" target="_blank" class="social-icon-nav me-2" title="LinkedIn"><i class="bi bi-linkedin"></i></a><a href="${a}" class="social-icon-nav" title="Send Email"><i class="bi bi-envelope-fill"></i></a>`,s=`<a href="${e.l}" target="_blank" class="social-icon-sidebar" title="LinkedIn"><i class="bi bi-linkedin"></i></a><a href="${a}" class="social-icon-sidebar" title="Send Email"><i class="bi bi-envelope-at-fill"></i></a>`;const r=document.getElementById("js-name"),c=document.getElementById("js-footer-name"),d=document.getElementById("js-specialization");r&&(r.textContent=o),c&&(c.textContent=o),d&&(d.textContent=e.s);const l=document.getElementById("js-desktop-socials"),i=document.getElementById("js-mobile-socials");l&&(l.innerHTML=s),i&&(i.innerHTML=n)})()}));document.addEventListener("click",(e=>{const t=e.target.closest(".view-code-btn")||e.target.closest(".send-msg-btn");if(!t)return;const n=t.closest(".col-12")||t.closest(".mt-auto"),o=n?n.querySelector(".text-info")||t.nextElementSibling:null;o&&(o.hideTimeout&&clearTimeout(o.hideTimeout),o.classList.remove("d-none"),o.hideTimeout=setTimeout((()=>o.classList.add("d-none")),3e3))}));document.querySelectorAll("input, textarea").forEach((e=>{e.addEventListener("input",(()=>{const t=e.nextElementSibling;e.value?t.classList.add("floating"):t.classList.remove("floating")}))}));const navbarCollapse=document.getElementById("navbarNav"),bsCollapse=new bootstrap.Collapse(navbarCollapse,{toggle:!1});document.querySelectorAll(".nav-link, #theme-toggle").forEach((e=>{e.addEventListener("click",(()=>{navbarCollapse.classList.contains("show")&&bsCollapse.hide()}))}));
document.addEventListener("DOMContentLoaded",(()=>{AOS.init({once:!0,offset:50,duration:800}),new Typed("#typed-text",{strings:["Quality Engineering Lead.","Payment Specialist.","Automation Engineer."],typeSpeed:50,backSpeed:30,loop:!0,backDelay:2e3});const e=document.getElementById("theme-toggle"),t=document.getElementById("theme-icon"),n=document.documentElement,o=document.getElementById("theme-toggle-mobile"),a=document.getElementById("theme-icon-mobile");function i(e){let t,o;"dark"===e?(t="#ffffff",o="#ffffff"):(t="#0d6efd",o="#212529"),particlesJS("particles-js",{particles:{number:{value:60,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.5,random:!1},size:{value:4,random:!0},line_linked:{enable:!0,distance:150,color:o,opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"}},modes:{grab:{distance:140,line_linked:{opacity:1}},push:{particles_nb:4}}},retina_detect:!0})}function s(e){const n="dark"===e?"bi-moon-fill":"bi-sun-fill",o="dark"===e?"bi-sun-fill":"bi-moon-fill";t&&(t.classList.remove(o),t.classList.add(n)),a&&(a.className="bi "+n)}const l=localStorage.getItem("theme")||"dark";n.setAttribute("data-bs-theme",l),s(l),i(l),e&&e.addEventListener("click",(()=>{const e="dark"===n.getAttribute("data-bs-theme")?"light":"dark";n.setAttribute("data-bs-theme",e),localStorage.setItem("theme",e),s(e),setTimeout((()=>i(e)),50)})),o&&o.addEventListener("click",(()=>{e&&e.click()}));const c=document.getElementById("navbarNav"),r=new bootstrap.Collapse(c,{toggle:!1});document.querySelectorAll(".nav-link, #theme-toggle, #theme-toggle-mobile").forEach((e=>{e.addEventListener("click",(()=>{c.classList.contains("show")&&r.hide()}))})),(()=>{const e={n:"U2FuZGVlcCBrdW1hciBBcnlh",e:"c2thcnlhMzFAZ21haWwuY29t",l:"https://www.linkedin.com/in/sandeep-kumar-arya/",s:"ISO 8583"},t=e=>atob(e),o=t(e.n),a=`mailto:${t(e.e)}`,i=`<a href="${e.l}" target="_blank" class="social-icon-nav me-2" title="LinkedIn"><i class="bi bi-linkedin"></i></a><a href="${a}" class="social-icon-nav" title="Send Email"><i class="bi bi-envelope-fill"></i></a>`,s=`<a href="${e.l}" target="_blank" class="social-icon-sidebar" title="LinkedIn"><i class="bi bi-linkedin"></i></a><a href="${a}" class="social-icon-sidebar" title="Send Email"><i class="bi bi-envelope-at-fill"></i></a>`,l=document.getElementById("js-name"),c=document.getElementById("js-footer-name"),r=document.getElementById("js-specialization"),d=document.getElementById("js-desktop-socials"),m=document.getElementById("js-mobile-socials");l&&(l.textContent=o),c&&(c.textContent=o),r&&(r.textContent=e.s),d&&(d.innerHTML=s),m&&(m.innerHTML=i)})()})),document.addEventListener("click",(e=>{const t=e.target.closest(".view-code-btn, .view-code-btn-1, .view-code-btn-2, .send-msg-btn");if(t){const n=t.closest(".mt-auto, .col-12, .container")||t.parentElement,o=n.nextElementSibling||n.querySelector(".code-message, .text-info");o&&(o.hideTimeout&&clearTimeout(o.hideTimeout),o.classList.remove("d-none"),o.classList.add("show"),o.hideTimeout=setTimeout((()=>{(o.classList.contains("collapse")?bootstrap.Collapse.getOrCreateInstance(o).hide():(o.classList.remove("show"),o.classList.add("d-none")))}),3e3))}})),document.querySelectorAll("input, textarea").forEach((e=>{e.addEventListener("input",(()=>{const t=e.nextElementSibling;t&&"LABEL"===t.tagName&&(e.value?t.classList.add("floating"):t.classList.remove("floating"))}))}));
// ==========================================