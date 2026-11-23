/* ===== PORTFOLIO MAIN JAVASCRIPT ===== */
document.addEventListener('DOMContentLoaded', () => {

    // ===== TYPED.JS INITIALIZATION =====
    new Typed('.typed-text', {
        strings: [
            'Web Developer',
            'ML Enthusiast',
            'App Developer',
            'Problem Solver',
            'CS Undergraduate'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    function getSystemTheme() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        }
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.setAttribute('content', theme === 'dark' ? '#171613' : '#F3EFE7');
        }
    }

    // Initialize based on saved preference or system preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    const initialTheme = savedTheme || getSystemTheme();
    applyTheme(initialTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem('portfolio-theme', next);
            applyTheme(next);
        });
    }

    // Listen to system preference changes if no manual preference is saved
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            if (!localStorage.getItem('portfolio-theme')) {
                applyTheme(e.matches ? 'light' : 'dark');
            }
        });
    }

    // ===== MOBILE NAVIGATION =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');
    const navAnchors = navLinks.querySelectorAll('a');

    function toggleNav() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        navOverlay.classList.toggle('show');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleNav);
    navOverlay.addEventListener('click', toggleNav);

    navAnchors.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                toggleNav();
            }
        });
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id]');

    function activateNavOnScroll() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = navLinks.querySelector(`a[href="#${sectionId}"]`);

            if (navLink && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navAnchors.forEach(a => a.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', activateNavOnScroll);

    // ===== SCROLL REVEAL (IntersectionObserver) =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 4px 16px var(--shadow-color)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        const formData = {
            access_key: "96b7c0d0-5475-40d1-985c-e97d308b209e", 
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value
        };

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(async (response) => {
            if (response.status === 200) {
                showToast('Message sent successfully! I\'ll get back to you soon. ✨');
                contactForm.reset();
            } else {
                showToast('Failed to send message. Please try again later.');
            }
        })
        .catch(error => {
            showToast('Something went wrong. Please check your connection.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        });
    });

    // ===== TOAST NOTIFICATION =====
    function showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }



});