// ===================================
// Navigation Functionality
// ===================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Add scroll effect to navigation
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Copy Template Functionality
// ===================================
const copyBtn = document.getElementById('copyBtn');

if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
        const template = `Hi Vijay,

We're exploring AI but need clarity on where to start and how to extract real value safely. Can we schedule 30 minutes to discuss priorities, guardrails, and next steps?

Thanks,`;

        try {
            await navigator.clipboard.writeText(template);
            copyBtn.textContent = 'Copied!';
            copyBtn.style.backgroundColor = 'var(--kudo-navy)';
            copyBtn.style.color = 'var(--kudo-cream)';
            
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.style.backgroundColor = 'var(--kudo-cream)';
                copyBtn.style.color = 'var(--kudo-navy)';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            copyBtn.textContent = 'Failed';
            
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
            }, 2000);
        }
    });
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[class*="fadeIn"]').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// ===================================
// Performance: Lazy Load Images
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Add current year to footer
// ===================================
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Kudo Advisory`;
}

// ===================================
// Preload critical resources
// ===================================
const preloadLink = document.createElement('link');
preloadLink.rel = 'preload';
preloadLink.as = 'font';
preloadLink.type = 'font/woff2';
preloadLink.crossOrigin = 'anonymous';

// ===================================
// Analytics placeholder
// ===================================
// Add your analytics code here (Google Analytics, Plausible, etc.)
// Example:
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'YOUR-GA-ID');

console.log('Kudo Advisory website loaded successfully');
