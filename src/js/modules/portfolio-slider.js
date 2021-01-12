export const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
    },
    effect: 'fade',
    centeredSlides: true,
    navigation: {
        nextEl: '.portfolio-slider__next-slide',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});