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

    // Fade-in animation removed for stability
});
