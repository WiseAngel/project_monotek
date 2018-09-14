$(function() {

    /*function onResize() {
        $('.services__title_profit').equalHeights();
    }
    onResize();
    window.onresize = function() { onResize() };*/

    function onResize() {
        $('.achievements__block').equalHeights();
    }
    onResize();
    window.onresize = function() { onResize() };

    $('.owl-carousel.works__slider').owlCarousel({
        loop: false,
        nav: true,
        items: 1,
        dots: false,
        responsiveClass: true,
        autoWidht: true,
        autoplay: false,
        smartSpeed: 600,
        dotsSpeed: 600,
        autoplaySpeed: 2000,
        // autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        touchDrag: false,
        mouseDrag: false,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<span class="fas fa-angle-double-right"></span>'],
        responsive: {
            0: {
                nav: false,
                dots: true
            },
            576: {
                nav: true
            }
        }
    });

    $('.owl-carousel.team__slider').owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        responsiveClass: true,
        autoWidht: true,
        autoHeight: true,
        autoplay: false,
        smartSpeed: 600,
        dotsSpeed: 600,
        autoplaySpeed: 2000,
        // autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        touchDrag: false,
        mouseDrag: false,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<span class="fas fa-angle-double-right"></span>'],
        responsive: {
            0: {
                nav: true
            }
        }
    });

    $('.slide__photo').slick({
        dots: false,
        arrow: true,
        autoplay: false,
        infinite: false,
        autoplaySpeed: 8000,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    var galleryOptions = {
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    };
    $('.slide__photo_1').magnificPopup(galleryOptions);
    $('.slide__photo_2').magnificPopup(galleryOptions);
    $('.slide__photo_3').magnificPopup(galleryOptions);
    $('.slide__photo_4').magnificPopup(galleryOptions);

    $('.certificate__img_origin').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 500
        }
    });

    $('.table__button_service').on('click', function() {
        $(this).addClass('table__button_active').siblings('.table__button_service').removeClass('table__button_active');
    });
    $('#btn_capital').on('click', function() {
        $('.cell_elite').css('display', 'none').removeClass('cell_active');
        $('.cell_capital').css('display', 'table-cell').addClass('cell_active');


    });
    $('#btn_elite').on('click', function() {
        $('.cell_capital').css('display', 'none').removeClass('cell_active');
        $('.cell_elite').css('display', 'table-cell').addClass('cell_active');
    });
    $(window).resize(function() {
        if ($(window).width() > 576) {
            $('.cell_capital, .cell_elite').removeAttr('style')
        }
    });
    $(window).resize(function() {
        if ($(window).width() < 576) {
            $('#btn_capital').addClass('table__button_active').siblings('.table__button_service').removeClass('table__button_active');
            $('.cell_elite').css('display', 'none').removeClass('cell_active');
            $('.cell_capital').css('display', 'table-cell').addClass('cell_active');
        }
    });


    $('.footer__button').on('click', function() {
        // $('.hidden__form').css('left', '0');
        // $('.popup__form').css('transform', 'translate(-50%, -50%)');
        $('.hidden__form').css('transform', 'scale(1)');
        setTimeout(function() {
            $('.hidden__form').css('background-color', 'rgba(255,203,7,.1)');
        }, 1000);

    });

    $('.form__close').on('click', function() {
        // $('.hidden__form').css('left', '0');
        // $('.popup__form').css('transform', 'translate(-50%, -50%)');
        $('.hidden__form').css('background-color', 'transparent');
        setTimeout(function() {
            $('.hidden__form').css('transform', 'scale(0)');
        }, 500);

    });


    //E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.form__success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                $(th).find('.form__success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 5000);
        });
        return false;
    });
    //E-mail Ajax Send popup form
    $("form.popup__form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.form__success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                $(th).find('.form__success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 5000);
            $('.hidden__form').css('background-color', 'transparent');
            setTimeout(function() {
                $('.hidden__form').css('transform', 'scale(0)');

            }, 1000);
        });
        return false;
    });

});