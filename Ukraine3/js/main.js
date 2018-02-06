//меню
$('document').ready(function(){
    var removed = false;
    $('#modal').modal();
    $('#brand2').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20){
            if (!removed) {
                $('.navbar').removeClass("navbar-static").addClass("navbar-scrol");
                $('#brand').hide();
                $('#brand2').show();
                $('.ref-nav').removeClass("a-top").addClass("a");
                $('.phone-header, .dey').removeClass("li-top").addClass("li");
            }
            removed = true;
        }
        else{
            if (removed) {
                $('.navbar').removeClass("navbar-scrol").addClass("navbar-static");
                $('#brand').show();
                $('#brand2').hide();
                $('.ref-nav').addClass("a-top").removeClass("a");
                $('.phone-header, .dey').addClass("li-top").removeClass("li");
            }
            removed = false;
        }
    });


});

$(function() {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop:0
        },1000);
    })
})
// при прокрутке окна (window)
$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop()>200) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});