// Animación del logo
anime({
    targets: '.logo span',
    color: ['#ff3333', '#ff0000'],
    duration: 2000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad'
});

// Animación del logo SVG
anime({
    targets: '.logo-svg',
    rotate: [
        { value: -3, duration: 1500, delay: 0 },
        { value: 3, duration: 1500, delay: 0 }
    ],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});

// Animación de entrada para las tarjetas
const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);
// Aplicar animación a la sección de actividades


// Aplicar animación a las tarjetas de equipo y actividades
document.querySelectorAll('.team-member, .activity-card').forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.5s ease-out";
    observer.observe(element);
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación