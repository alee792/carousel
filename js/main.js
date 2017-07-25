function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 15000
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    $('.play').click(function () {
        $('.slider-for').slick('slickPlay');
        $(this).addClass('is-primary');
        $('.pause').removeClass('is-warning');
    });

    $('.pause').click(function () {
        $('.slider-for').slick('slickPause');
        $(this).addClass('is-warning');
        $('.play').removeClass('is-primary');
    });

    $('.hero').click(function () {
        launchIntoFullscreen(document.documentElement);
        $("html, body").animate({ scrollTop: $(document).height() }, 3000);
        return false;
    });
});