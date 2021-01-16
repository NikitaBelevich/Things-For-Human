export const mySwiper2 = new Swiper('.partners .swiper-container', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    // effect: 'fade',
    centeredSlides: true,
    
    pagination: {
        el: '.partners .swiper-pagination',
        clickable: true,
    },
});