const swiper = new Swiper('.swiper', {
    direction: 'horizontal',  // Set this to 'vertical' if you want vertical slides
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1240: {
            slidesPerView: 3,
        },
    },
});
