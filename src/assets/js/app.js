const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function(e) {
<<<<<<< HEAD
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active')
=======
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active')
>>>>>>> 6be501dca0fa7b165ac878b2eb024deaebe265b1
    })
}