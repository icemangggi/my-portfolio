document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.cssText = cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Select elements to animate
    // Note: In HTML I used data-aos attributes as placeholders for a library, 
    // but here I'll manually target them or add a common class if I didn't load AOS.
    // Let's select common elements to animate based on the CSS class I added or just generic tags.
    // I added .fade-up class in CSS, let's apply it to sections or specific elements.
    
    const animatedElements = document.querySelectorAll('.section-title, .about-text, .about-image, .skill-card, .project-card, .contact-content');
    
    animatedElements.forEach(el => {
        el.classList.add('fade-up'); // Add the initial hidden class
        observer.observe(el);
    });
});
