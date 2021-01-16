export const mySwiper = new Swiper('.portfolio-slider .swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
    },
    grabCursor: true,
    effect: 'fade',
    centeredSlides: true,
    navigation: {
        nextEl: '.portfolio-slider .portfolio-slider__next-slide',
    },
    pagination: {
        el: '.portfolio-slider .swiper-pagination',
        clickable: true,
    },
});