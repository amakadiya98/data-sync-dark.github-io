$(document).ready(function () {
    const nextIcon = '<img class="nextIcon" src="./assets/images/prewIcon.svg">'
    const prewIcon = '<img class="prewIcon" src="./assets/images/nextIcon.svg">'
    $(".owl-carousel").owlCarousel({
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