// Smart Kommunity Official Website - Interactive Navigation & Showcase Controller

document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Menu Toggle & Overlay
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav-menu');
    const overlay = document.querySelector('.nav-overlay');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('open');
            if (overlay) overlay.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            if (mobileNav) mobileNav.classList.remove('open');
            overlay.classList.remove('open');
            if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        });
    }
    
    // Close mobile nav on anchor link click
    const mobileLinks = document.querySelectorAll('.mobile-nav-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileNav) mobileNav.classList.remove('open');
            if (overlay) overlay.classList.remove('open');
            if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // 2. Sticky Header Elevation on Scroll
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // 3. Interactive FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-accordion-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question-btn');
        if (questionBtn) {
            questionBtn.addEventListener('click', function() {
                const isOpen = item.classList.contains('open');
                
                // Close other open FAQ items
                faqItems.forEach(i => i.classList.remove('open'));
                
                // Toggle current
                if (!isOpen) {
                    item.classList.add('open');
                }
            });
        }
    });
});
