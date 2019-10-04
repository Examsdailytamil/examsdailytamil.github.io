(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {



        //Slider height
        var WindHeight = $(window).height(),
            sliderArea = $('.slider-area');

        sliderArea.css('height', WindHeight);

        if ($.fn.slick) {

            //Hero Area Slider
            sliderArea.slick({
                autoplay: true,
                autoplaySpeed: 10000,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: false,
                dots: true,
                pauseOnDotsHover: true,
                cssEase: 'linear',
                // fade:true,
                draggable: true,
                prevArrow: '<button class="PrevArrow"></button>',
                nextArrow: '<button class="NextArrow"></button>',
            });

            //Brands Logos Slider
            $('.partners-logo-wrap').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                responsive: [

                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            arrows: false
                        }
                },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                }
              ]
            });

            //Clients Reviews Slider
            $('.clients-reviews-wrap').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                prevArrow: '<i class="testi-nav icofont icofont-thin-left"></i>',
                nextArrow: '<i class="testi-nav icofont icofont-thin-right"></i>',
                responsive: [

                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                }
              ]
            });

        }

        //Menu Sticky
        if ($.fn.sticky) {
            $('.header-area').sticky();
        }


        // Projects Gallery
        if ($.fn.isotope) {

            var projectsWrap = $(".projects-wrap"),
                projectLi = $('ul.projects-filter li');

            projectsWrap.isotope({
                itemSelector: '.sin-project',
                layoutMode: 'fitRows',
            });

            projectLi.on('click', function () {

                projectLi.removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr('data-filter');
                projectsWrap.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }

        //Fancy Box
        if ($.fn.fancybox) {
            $(".fancybox").fancybox({
                helpers: {
                    title: {
                        type: 'float'
                    }
                }
            });
        }

        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 108)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });


        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 84
        });

        //Nav active class
        $(".nav .nav-link").on("click", function () {
            $(".nav").find(".active").removeClass("active");
            $(this).addClass("active");
        });



    });


    //Preloader JS
    jQuery(window).on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });




}(jQuery));
