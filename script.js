// Smooth scroll behavior is handled by CSS
// This file can be used for additional interactivity if needed

document.addEventListener('DOMContentLoaded', function () {
    // Optional: Add smooth scroll polyfill for older browsers
    const contactButton = document.querySelector('.btn-contact');

    if (contactButton) {
        contactButton.addEventListener('click', function (e) {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('fade-in-section'); // Add base class
        observer.observe(section);
    });
});
