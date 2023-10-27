// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".spinner").delay(500).fadeOut(400, function() {
        document.documentElement.style.setProperty('--backRightIn', 'translateX(100%)')
        document.documentElement.style.setProperty('--backLefttIn', 'translateX(-100%)')
        $(".loader").fadeOut(1500);
    });
    $("body").css("overflow-y", "auto");

    // Animation Page
    AOS.init();

});

$(document).ready(function () {

    // Click Btn To Up Page
    $(document).on("click", ".fix-up-btn",function() {
        $('html,body').animate({ scrollTop: 0 }, 10);
    });

    // Click Open Nav In Mobile
    $(document).on("click", ".click-nav, .overlay-fixed",function() {
        $(".handle").toggleClass("closed");
        $(".nav-header").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("body").toggleClass("overflow-hidden");
    });

    // Click Open form Job App
    $(document).on("click", ".open-form-job-app",function() {
        $(".form-job-app").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
    });

    // Scroll Fix Header
    $(window).scroll(function () {

        // Fade Heade Animation
        if ($(window).width() > 767) {
            if($(this).scrollTop() > 30){
                $('.header').addClass('header-fixed')
            }else{
                $('.header').removeClass('header-fixed')
            }
        }

        // Fade Btn To Click Up Page
        ($(this).scrollTop() > 300) ? $('.fix-up-btn').removeClass('visible') : $('.fix-up-btn').addClass('visible');

    });

    // Upolad Files
    $('#file-upload').change(function() {
        var i = $(this).prev('label').clone();
        var file = $('#file-upload')[0].files[0].name;
        $(this).prev('label').text(file);
    });

    // Slider Home
    $('#sliderHome').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arr-l"></i>',
            '<i class="icon-arr-r"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Slider Images
    $('#sliderImages').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arr-l"></i>',
            '<i class="icon-arr-r"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Slider Media
    $('.sliderMedia').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arr-l"></i>',
            '<i class="icon-arr-r"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Slider Project
    $('.sliderProject').owlCarousel({
        loop:true,
        margin:10,
        center:true,
        autoplay:true,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-chevron-left"></i>',
            '<i class="icon-chevron-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // Slider Project
    $('.sliderProjectDetails').owlCarousel({
        loop:true,
        margin:10,
        center:true,
        autoplay:true,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arr-l"></i>',
            '<i class="icon-arr-r"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    
});


