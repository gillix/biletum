var tnum = 'en';

$(document).ready(function(){

  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');
  });

  $('.translate_wrapper .current_lang').click(function(e){
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 3);
  });

	$('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');

    var img = $(this).find('img').attr('src');
    var lang = $(this).attr('data-value');

    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);

  });

});

;


/* Slider  */
new Swiper('.slider-container',{
	centeredSlides: true,
	slidesPerView: 'auto',
	loop:true,
	spaceBetween:16,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	touchRatio:2,
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
});

/* Reviews  */
new Swiper('.reviews-slider',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	spaceBetween:24,
	touchRatio:2,
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	slidesPerView:2.3,
	autoHeight: true,

});

/* scrollTo */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const iconMenu = document.querySelector(".menu__icon");
const lang = document.querySelector(".translate_wrapper");
const mobileMenu = document.querySelector('.header__menu');

if(menuLinks.length > 0){
	menuLinks.forEach(link => {
		link.addEventListener("click", onMenuLinkClick)
	});
}

function onMenuLinkClick(e){
	const menuLink = e.target;
	if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
		const gotoSection = document.querySelector(menuLink.dataset.goto);
		const gotoValue = gotoSection.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

		if(iconMenu.classList.contains('active')){
			document.body.classList.remove('lock');
			iconMenu.classList.remove('active');
			mobileMenu.classList.remove('active');
		}

		window.scrollTo({
			top:gotoValue,
			behavior: "smooth"
		});
		e.preventDefault();
	}
}


/* Mobile menu */
if(iconMenu){


	iconMenu.addEventListener("click", function(e){

	document.body.classList.toggle('lock');
	iconMenu.classList.toggle('active');
	mobileMenu.classList.toggle('active');

	});
}

