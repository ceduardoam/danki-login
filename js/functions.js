$(function() {
    $(window).resize(function() {
        var vwSize = $(window).width();

        if(vwSize > 1200) {
            $('.mobile-menu').fadeOut();
        }

    })

    $('header .header-desktop-menu i').click(function() {
        $('.mobile-menu').slideToggle();
    })

    var boxForm = $('.header-desktop-menu .box-form-wraper');
    $('.header-desktop-menu .enter-link').click(function() {
        if(boxForm.is(':hidden')) {
            boxForm.fadeIn();
        } else {
            boxForm.fadeOut();
        }
    })

    var boxFormMobile = $('.header-mobile .box-form-wraper');
    $('.header-mobile .enter-link').click(function() {
        if(boxFormMobile.is(':hidden')) {
            boxFormMobile.fadeIn();
        } else {
            boxFormMobile.fadeOut();
        }
    })
})