$(function () {
	//Мобильное меню
	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".navigation-mobile__menu").toggleClass('active');
		return false;
	});
	$(".navigation-mobile-search.search").on("click", function () {
		$(".navigation__mnu-search").toggleClass("active")
	})
	$(".navigation-mobile__contacts").on("click", function () {
		$(".navigation-mobile__phone-drop").toggleClass("active")
	})
	//Мобильное меню
	//Слайдер в шапке
	$('.promo__slider-init').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows: false,
		fade: true,
		cssEase: 'linear'
	});

	$(".counter__count").text($(".promo__slider-init").slick("getSlick").slideCount)
	$(".promo__slider-init").on("afterChange", function (event, slick, currentSlide, nextSlide) {
		$(".counter__current").text(currentSlide + 1);
	});
	$('.promo__slider-controls .prev').click(function () {
		$('.promo__slider-init').slick('slickPrev');
	})

	$('.promo__slider-controls .next').click(function () {
		$('.promo__slider-init').slick('slickNext');
	})
	//Слайдер в шапке
	//Слайдер партнеры
	$('.partners__slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		arrows: false,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.partners .prev').click(function () {
		$('.partners__slider').slick('slickPrev');
	})

	$('.partners .next').click(function () {
		$('.partners__slider').slick('slickNext');
	})
	//Слайдер партнеры
	//Поиск
	$(".navigation__mnu-link.search").on("click", function () {
		$(".navigation__mnu-search").toggleClass("active")
	})
	//Поиск
});
