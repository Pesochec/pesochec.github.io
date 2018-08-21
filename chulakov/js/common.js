$(function() {


	/* Функция объеденения 4 полей формы в 1 для отправки */
	$("#CardNumber1, #CardNumber2, #CardNumber3, #CardNumber4").bind("keyup", function() { /* Отслеживание изменения полей */
		var CN1 = $("#CardNumber1").val(); /* 1 часть поля */
		var CN2 = $("#CardNumber2").val(); /* 2 часть поля */
		var CN3 = $("#CardNumber3").val(); /* 3 часть поля */
		var CN4 = $("#CardNumber4").val(); /* 4 часть поля */
		$("#Card").val(CN1+'-'+CN2+'-'+CN3+'-'+CN4); /* Объединение 4 полей в 1 формата 0000-0000-0000-0000*/
	});
	/* Функция объеденения 4 полей формы в 1 для отправки */

	/* Функция перепрыгивания полей */
	$('#CardNumber1, #CardNumber2, #CardNumber3, #CardNumber4').bind('input', function(){
		if ($(this).val().length == 4 ) { 
			$(this).next().focus();
		}
		if ($(this).val().length < 1 ) {
			$(this).prev().focus();
		}
	});
	/* Функция перепрыгивания полей */
	/* Отсечение всех символов кроме чисел от 0-9 */
	$('input.card__number-input, input.card__input-cvc').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) 
			{this.value = this.value.replace(/[^0-9]/g, '');}
	});
/* Отсечение всех символов кроме чисел от 0-9 */
/* Появление подсказки */
$(".card__cvc-hint-button").on('mouseenter mouseleave click', function() {
$(".card__cvc-hint").toggle()
});
/* Появление подсказки */
/* Пдавающая боковая панелька */
$(window).scroll(function() {
	if ($(this).scrollTop() > 85) {
		$(".sidebar").addClass("sidebar-fixed");
	} else if ($(this).scrollTop() < 85) {
			$(".sidebar").removeClass("sidebar-fixed");
	}
});
/* Пдавающая боковая панелька */


});
