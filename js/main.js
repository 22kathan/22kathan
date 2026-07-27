/* ─────────────────────────────────────────────────────────────
   Kathan Gadhiya — Portfolio Interactive Logic
   ───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initSmoothScroll();
    initNavbarScroll();
});

// Dynamic Typing Animation
function initTypingEffect() {
    const targetEl = document.getElementById('typingTarget');
    if (!targetEl) return;

    const phrases = [
        "Data Scientist & ML Enthusiast 📊",
        "AI Forensics Developer 🛡️",
        "Computer Vision & Gesture Explorer ⚡",
        "Predictive Analytics Architect 🔮"
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function type() {
        const currentPhrase = phrases[phraseIdx];
        
        if (isDeleting) {
            targetEl.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
            typeSpeed = 40;
        } else {
            targetEl.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIdx === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(7, 9, 14, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(7, 9, 14, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Smooth Scroll Links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
