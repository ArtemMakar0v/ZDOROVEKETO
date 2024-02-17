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

var coll = document.getElementsByClassName("accordeon__title");
var i;

for (i = 0; i < coll.length; i++){
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.visibility = "hidden";
      content.style.margin = "0 2%";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.visibility = "visible";
      content.style.margin = "12px 2%";
    }
  });
}

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 1000);
});

