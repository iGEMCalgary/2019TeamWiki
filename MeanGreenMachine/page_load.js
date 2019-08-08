// JavaScript source code
$(window).on('load', function () {
    $("#cover").fadeOut(1000);

});

$(document).ready(function () {


    // notebook timeline switch functionality
    $('.team-bar-1').addClass("padded");
    $('#team-bar div').click(function () {
        $('#team-bar div').removeClass("padded");
        $(this).addClass("padded");
    });


    $('#timeline2').css("display", "none");
    $('#timeline3').css("display", "none");

    $('.team-bar-1').click(function () {
        $('#timeline2, #timeline3').css("display", "none");
        $('#timeline1').css("display", "block");
    });

    $('.team-bar-2').click(function () {
        $('#timeline1, #timeline3').css("display", "none");
        $('#timeline2').css("display", "block");
    });

    $('.team-bar-3').click(function () {
        $('#timeline1, #timeline2').css("display", "none");
        $('#timeline3').css("display", "block");
    });


    // From w3school (Slide to anchor)
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


// Fade in if in view on scroll
$(document).on("scroll", function () {

    var pageTop = $(document).scrollTop();
    var docHeight = $(document).height();
    var screenHeight = screen.height;



    if ($(window).scrollTop() > 0) {
        $('nav').addClass('scroll');
        $('#bot-nav').addClass('scroll');
    };

    if ($(window).scrollTop() < 1) {
        $('nav').removeClass('scroll');
        $('#bot-nav').removeClass('scroll');
    };

    $(".progress-bar").css("width", pageTop / (docHeight - screenHeight) * 100 + "%");



});