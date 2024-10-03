document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for links with class 'scroll-link'
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Change header and footer background on scroll
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            footer.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            footer.classList.remove('scrolled');
        }
    });
});