document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animations for Sections
    const sections = document.querySelectorAll('.page-section');
    
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: document.getElementById('scroll-container'),
        threshold: 0.15, // Trigger when 15% of the section is visible
        rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 2. Active Menu Link Handling
    const navLinks = document.querySelectorAll('.nav-link');
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding link
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if(activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        root: document.getElementById('scroll-container'),
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    sections.forEach(section => {
        navObserver.observe(section);
    });
});
