$(document).ready(function () {
    const nextIcon = '<img class="nextIcon" src="./assets/images/prewIcon.svg">'
    const prewIcon = '<img class="prewIcon" src="./assets/images/nextIcon.svg">'
    $(".mainSlider").owlCarousel({
        items: 2,
        loop: true,
        margin: 48,
        nav: true,
        autoWidth: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: [
            nextIcon, prewIcon
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

});


$(document).ready(function () {
    const nextIcon = '<img class="nextIcon" src="./assets/images/prewIcon.svg">'
    const prewIcon = '<img class="prewIcon" src="./assets/images/nextIcon.svg">'
    $(".tabSlider").owlCarousel({
        items: 1,
        loop: true,
        margin: 48,
        nav: true,
        autoWidth: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: [
            nextIcon, prewIcon
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});




$(document).ready(function () {
    $('.flip-button1').click(function () {
        $('.card1 ').addClass('flipped');
    });

    $('.flip-back-button1').click(function () {
        $('.card1 ').removeClass('flipped');
    });
});

$(document).ready(function () {
    $('.flip-button2').click(function () {
        $('.card2 ').addClass('flipped');
    });

    $('.flip-back-button2').click(function () {
        $('.card2 ').removeClass('flipped');
    });
});

$(document).ready(function () {
    $('.flip-button3').click(function () {
        $('.card3 ').addClass('flipped');
    });

    $('.flip-back-button3').click(function () {
        $('.card3 ').removeClass('flipped');
    });
});

$(document).ready(function () {
    $('.flip-button4').click(function () {
        $('.card4 ').addClass('flipped');
    });

    $('.flip-back-button4').click(function () {
        $('.card4 ').removeClass('flipped');
    });
});