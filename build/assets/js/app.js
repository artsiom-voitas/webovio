const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active')
    })
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    breakpoints: {
        320: {
            slidesPerView: 1,
            loop: true,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: false,
        },
        1140: {
            slidesPerView: 5,
            loop: false,
        }
    },
})