const swiper = new Swiper('.rewies__slider', {
  slidesPerView:1,
  spaceBetween: 22,
  loop: true,

    navigation: {
      nextEl: '.reviews__item-next',
      prevEl: '.reviews__item-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      681: {
        slidesPerView: 2,
        spaceBetween: 22
      }},
      
     } );

const menuBtn =  document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu-open');
});



