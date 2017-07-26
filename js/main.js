function launchIntoFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

$(document).ready(function () {

    setInterval(function () {
        $('iframe').attr('src', function (i, val) { return val });
    }, 15 * 1000 * 3600);

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

    document.addEventListener('fullscreenchange', function () {
        document.body.classList.toggle('is-fullscreen', document.fullscreenEnabled);
    });

    $('.hero').click(function () {
        launchIntoFullscreen(document.documentElement);
        $("html, body").animate({ scrollTop: $(document).height() }, 2000);
        return false;
    });
});