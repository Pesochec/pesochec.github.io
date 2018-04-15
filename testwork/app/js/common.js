$(function() {
	$('.toggle-mnu').click(function() {
		$(".hidden-mnu").slideToggle();
	})
	$('.header__slider').owlCarousel({
		loop:true,
		margin:10,
		items:1,
		nav:false,
	})
	$('.advantages__slider').owlCarousel({
		loop:true,
		margin:30,
		items:3,
		navText: ['<img src="../img/slider-arrow.png" class="rot90" alt="" />',
		'<img src="../img/slider-arrow.png" class="" alt="" />'],
		nav:true,
		responsive:{
			0:{
				items:1,
				nav: false,
				margin:0,
			},
			768:{
				items:2,
				nav:true,
			},
			1025:{
				items:2,
				nav:true,
			},
			1440:{
				items:3,
				nav:true,
			}
		}
	})
	$('.review__slider').owlCarousel({
		loop:true,
		items:1,
		navText: ['<img src="../img/slider-arrow.png" class="rot90" alt="" />',
		'<img src="../img/slider-arrow.png" class="" alt="" />'],
		nav:true,
		responsive:{
			0:{
				nav: false,
			},
			768:{
				nav:false,
			},
			1025:{
				nav:true,
			}
		}
	})

});

