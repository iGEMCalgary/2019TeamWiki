// JavaScript source code
// nav dropdown menu
$(document).on("mouseenter", ".drop", function () {
    $('.dropdown').not(this).hide(100);
    $(this).children().show(100);
});

$(document).on("mouseleave", ".drop", function () {
    $('.dropdown').hide(100);
});


// mini nav functionality
$(document).on("click", "#menu", function () {
    $('#menu').fadeOut(200);
    $('#mini-nav-overlay').fadeIn(200);
});

$(document).on("click", "#cancel", function () {
    $('#menu').fadeIn(200);
    $('#mini-nav-overlay').fadeOut(200);
});

$(document).on("click", "#team, #project, #parts, #human, #awards", function () {
    $('#mini-nav').animate({
        left: '-=200px',
        opacity: '0'
    }, 200);

    switch ($(this).attr('id')) {
        case 'team':
            var expand = '#team2';
            break;
        case 'project':
            var expand = '#project2';
            break;
        case 'parts':
            var expand = '#parts2';
            break;
        case 'human':
            var expand = '#human2';
            break;
        case 'awards':
            var expand = '#awards2';
            break;
    }
    $(expand).fadeIn(400);
    $('#back').fadeIn(400);
});

$(document).on("click", "#back", function () {
    $('#mini-nav').animate({
        left: '+=200px',
        opacity: '1'
    }, 200);
    $('.expand, #back').fadeOut(200);
});

$(document).ready(function () {
    var windowWidth = 992;

    $(window).resize(function () {
        if (($(window).width()) > windowWidth) {
            $('#mini-nav-overlay, #menu').css({
                "display": "none"
            });
        } else {
            if ($('#mini-nav-overlay').css('display') == 'none') {
                $('#menu').show();
            }
        }
    });

});

// Fade in nav if in view on scroll
$(document).on("scroll", function () {


    if ($(window).scrollTop() > 0) {
        $('nav').addClass('scroll');
    };

    if ($(window).scrollTop() < 1) {
        $('nav').removeClass('scroll');
    };

});

$(window).on('load', function () {
    $("#cover").fadeOut(1000);
    $('#panel1').animate({
        left: "-=50%"
    }, 1000, function () { });

    $('#panel2').animate({
        left: "+=50%"
    }, 1000, function () { });

});