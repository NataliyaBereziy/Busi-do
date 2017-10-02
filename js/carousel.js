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
                items: 1,
            },
            768 : {
                items: 3,
            }
        }
    });
});
