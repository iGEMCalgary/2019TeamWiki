var dict = {

    "grade 1 seeds": "<p> the highest grade with less than 2% Distinctly Green Seed (DGR) as per the Canola Council of Canada</p>",

    "Grade 2 seeds": "<p> between 2-6% DGR</p>",

    "grade 2 seeds": "<p> between 2-6% DGR</p>",
    "Canada Grains Commission": "<p> The body that controls how seeds are graded and takes care of all disputes in grades</p>",
    "NIR spectrometer": "<p> Near InfraRed Spectrometer. Due to chlorophyll's green, NIR is the right spectrum to be looking at to quantify the green at a high degree of accuracy. Unfortunately these machines are extremely expensive and fragile.</p>"
};


$(document).ready(function () {

    // MIND MAP FUNCTIONALITY


    var minWindowSize = 635;

    $('var').mouseenter(function () {
        if (($(window).width()) >= minWindowSize) {
            $('var').css({
                "text-decoration": "underline",
                "color": "black"
            });
            $(this).css({
                "text-decoration": "none",
                "color": "#1d9c82"
            });
            $('#mind-map').fadeOut(50).empty();
            if (($(this).text()).includes("\xA0")) {
                $('#mind-map').append($("<em><h1>" + $(this).text() + "</h1></em><br><br>"));
            } else {
                $('#mind-map').append($("<h1>" + $(this).text() + "</h1><br><br>"));
            }
            $('#mind-map').append($(dict[$(this).text()]));
            $('#mind-map').fadeIn(50);
        } else {
            $('var').css({
                "font-weight": "400",
                "text-decoration": "none",
                "color": "black"
            });
        };
    });
});

// DOESN'T WORK FOR SOME REASON ¯\_(ツ)_/¯
/*
$(window).resize(function () {
    console.log($(window).width());
    if (($(window).width()) < minWindowSize) {
        $('var').css({
            "text-decoration": "none",
            "color": "black"
        });
    } else {
        $('var').css({
            "text-decoration": "underline",
            "color": "black"
        });
    }
});*/