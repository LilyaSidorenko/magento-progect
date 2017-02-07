'use strict';
(function ($) {

    $(document).ready(function () {

        $('.main-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',

            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }
            ]


        });
        $(window).on('load resize', function () {

            if ($(window).outerWidth() > 767) {


                $('.main-slider .slick-dots').css({
                    top: '50%',
                    marginTop: -($('.main-slider .slick-dots').height()) / 2
                });
                $('.main-slider .slick-prev').css({
                    top: '50%',
                    marginTop: -$('.main-slider .slick-dots').height()/1.5
                });
                $('.main-slider .slick-next').css({
                    top: '50%',
                    marginTop: $('.main-slider .slick-dots').height()/1.5
                });
            } else {
                $('.main-slider .slick-dots').removeAttr('style')
            }
        });


        $('.brands-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: false

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false,
                        dots: true

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });

    });


})(jQuery);