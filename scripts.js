/*===================== Typing Stack =====================*/
let typed = new Typed('.typing', {
    strings: ['Web Developer', 'Full Stack Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/*===================== Scroll reveal =====================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});
