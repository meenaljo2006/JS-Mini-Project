const swiper = new Swiper('.mySwiper', {
    effect:"coverflow",
        slidesPerView: 3,  // Show 3 slides at a time
        spaceBetween: 20,  // Space between slides
        centeredSlides: true,  // Center the active slide
        loop: true,  // Enable infinite loop
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 30,  // Rotation angle of side slides
            stretch: 0,  // Stretch space between slides
            depth: 100,  // Depth effect
            modifier: 2, // Effect intensity
            slideShadows: true,  // Enable slide shadows
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
});