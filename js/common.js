$(function () {

    $(".best-slider").slick({
        dots: true,
        arrows: true,
        prevArrow: $('.best-slide-btn.left'),
        nextArrow: $('.best-slide-btn.right'),
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: "0%",
        responsive: [  // 반응형 적용여부
            {
                breakpoint: 767, //해상도 브레이크 포인트 설정
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    variableWidth: false,
                }
            }]

    });

    // $('.best-slider').on({
    //     init : function (event, slick) {
    //
    //     },
    //
    //     beforeChange : function (event, slick, currentSlide, nextSlide) {
    //         alert('비포');
    //     },
    //
    //     afterChange : function (event, slick, currentSlide, nextSlide) {
    //         alert('에프터');
    //     }
    //
    // });

    $('.event-slider').slick({
        dots: true,
        arrows: false,
    });

});












