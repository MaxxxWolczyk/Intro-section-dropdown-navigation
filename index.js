const openBtn = document.querySelector('.header__nav-btn');
const closeBtn = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');



openBtn.addEventListener('click', () => {
    nav.classList.add('nav--active');
})
closeBtn.addEventListener('click', () => {
    nav.classList.remove('nav--active');
})

