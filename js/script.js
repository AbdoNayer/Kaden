// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".spinner").delay(500).fadeOut(400, function() {
        document.documentElement.style.setProperty('--backRightIn', 'translateX(100%)')
        document.documentElement.style.setProperty('--backLefttIn', 'translateX(-100%)')
        $(".loader").fadeOut(1500);
    });
    $("body").css("overflow-y", "auto");

});

$(document).ready(function () {

    // Click Open Nav In Mobile
    $(document).on("click", ".click-nav, .overlay-fixed",function() {
        $(".handle").toggleClass("closed");
        $(".nav-header").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("body").toggleClass("overflow-hidden");
    });

    // Scroll Fix Header
    $(window).scroll(function () {
        if ($(window).width() > 767) {
            if($(this).scrollTop() > 30){
                $('.header').addClass('header-fixed')
            }else{
                $('.header').removeClass('header-fixed')
            }
        }
    });

    // Upolad Files
    $('#file-upload').change(function() {
        var i = $(this).prev('label').clone();
        var file = $('#file-upload')[0].files[0].name;
        $(this).prev('label').text(file);
    });

    // Animation Page
    AOS.init();

    // Slider Skills
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
    
});


