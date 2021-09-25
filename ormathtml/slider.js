$(document).ready(function () {
    $('.single-item').slick({
        arrows: true,
        infinite: true,
        swipeToSlide: true,
        dots: true,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: true,
    });
});


$(document).ready(function () {

    $('.multiple-items').slick({
        infinite: true,
        dots: true,
        arrows: true,
        speed: 300,
        slidesToShow: 2.8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll:1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.single-slide').slick({
        arrows: true,
        dots: true,
        infinite: true,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    arrows: false
                }
            }

        ]
    });
});

