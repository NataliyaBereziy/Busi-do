$(function() {
    $("#champions").owlCarousel({
        loop: true,
        center: true,
        mouseDrag: false,
        nav: true,
        navText: [
            '<div class="arrow"><img src="img/champions/left-arrow.png" alt="left-arrow"></div>',
            '<div class="arrow"><img src="img/champions/right-arrow.png" alt="right-arrow"></div>'
        ],
        responsive : {
            0: {
                center: false,
                items: 1,
            },
            768: {
                center: false,
                items: 2,
            },
            1051: {
                items: 3,
            }
        }
    });
});
