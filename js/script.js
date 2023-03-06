alert("S")

$(document).ready(function() {
    // плавна прокрутка меню

    $('.header a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('.header a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        return false;
    }); 

    // меню для мобільних пристроїв

    $('.menuBurger').click(function() {
        $('.menu').toggle(500);
        $(this).toggleClass('close');
    });
});
