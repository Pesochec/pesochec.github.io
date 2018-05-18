!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
$(function () {
	$(".toggle-mnu.mob").click(function() {
		$(this).toggleClass("on");
		$(".nav-mnu").fadeToggle();
		return false;
	});
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-mnu").fadeToggle();
		return false;
	});
	$(window).scroll(function(){
    if ($(window).scrollTop() >= 600) {
        $('.main-mnu').addClass('fixed');
    }
    else {
				$('.main-mnu').removeClass('fixed');
				$('.main-mnu .nav-mnu').show();
    }
});

	$(".payment__item").click(function () {
		$(".payment__item.active").removeClass("active");
		$(this).addClass("active");

	})
	$(".dropdown-button").click(function () {
		$(".tarif__item-time-dropdown").slideToggle();
		$(".tarif__item-time-dropdown").toggleClass("active");
	})

	$(".tarif__item-time-dropdown-item").click(function () {
		$(".tarif__item-time-dropdown").removeClass("active");
		$(".tarif__item-time-dropdown").slideUp();
		$(".tarif__item-time-dropdown-item.active").removeClass("active");
		$(this).addClass("active");
		$(".tarif__item-time .date").text($(this).text())

	})
	$("#calculator__item-price").slider({
		range: "min",
		step: 1000,
		value: 1000,
		min: 1000,
		max: 60000,
		slide: function (event, ui) {
			$("#price").val(ui.value  + "руб.");
		}
	});
	$("#price").val( $("#calculator__item-price").slider("value") + "руб.");
	$("#calculator__item-deal").slider({
		range: "min",
		step: 1,
		value: 1,
		min: 1,
		max: 20,
		slide: function (event, ui) {
			$("#deal").val(ui.value  + " сделки");
		}
	});
	$("#deal").val( $("#calculator__item-deal").slider("value") + " сделки");

	$("#calculator__item-period").slider({
		range: "min",
		step: 1,
		value: 2,
		min: 2,
		max: 20,
		slide: function (event, ui) {
			$("#period").val(ui.value  + " д.");
		}
	});
	$("#period").val( $("#calculator__item-period").slider("value") + " д.");

	$('.accordeon .acc-head').click(function() {
		$(this).next().slideToggle( "fast" );
		$(this).toggleClass("active");
		$(".accordeon .acc-head.active").find("b").text("-");
		$(".accordeon .acc-head:not(.active)").find("b").text("+");
	});

	$('.main-tarif.mobile .slider-tarif').owlCarousel({
    loop:true,
		responsiveClass:true,
		dots: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        769:{
            items:2,
            nav:false
        },
    }
})


});