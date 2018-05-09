$(function() {

	$(".payment__item").click(function() {
		$(".payment__item.active").removeClass("active");
		$(this).addClass("active");

	})
	$(".dropdown-button").click(function() {
		$(".tarif__item-time-dropdown").slideToggle();
		$(".tarif__item-time-dropdown").toggleClass("active");
	})

    $(".tarif__item-time-dropdown-item").click(function() {
			$(".tarif__item-time-dropdown").removeClass("active");
			$(".tarif__item-time-dropdown").slideUp();
        $(".tarif__item-time-dropdown-item.active").removeClass("active");
        $(this).addClass("active");
				$(".tarif__item-time .date").text($(this).text())

    })
});		