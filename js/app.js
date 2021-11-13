'use strict'
// -- scroll
const $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 450);
    return false;
});
// -- burger 
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.bar, .header__nav').toggleClass('animate')
    })
});
// -- slider header
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        touchTheshold: 2,
    });
    $('.slider').on('afterChange', function (events, slick, currentSlide) {
        $('.header').removeClass('headBG1 || headBG2 || headBG3 || headBG4');
        if (currentSlide == 1) {
            $('.header').addClass('headBG1');
        } if (currentSlide == 2) {
            $('.header').addClass('headBG2')
        } if (currentSlide == 3) {
            $('.header').addClass('headBG3')
        } if (currentSlide == 4) {
            $('.header').addClass('headBG4')
        }
    });
});
// -- slider news
$(document).ready(function () {
    $('.new-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        touchTheshold: 2,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 900,
                settings: {
                    arrows: false,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
// -- maps
function initMap() {
    const lviv = { lat: 49.84096, lng: 24.02525 };
    const map = new google.maps.Map(document.querySelector("#map"), {
        zoom: 15,
        center: lviv,
    });
    const image = "https://i.ibb.co/PMnHLkX/3440906-direction-location-map-marker-navigation-pin-107531-1.png";
    const marker = new google.maps.Marker({
        position: { lat: 49.84096, lng: 24.02525 },
        map,
        icon: image,
    });
}
// -- form
$('.input__button').on('click', function () {
    let userName = $('#name').val();
    let mail = $('#mail').val();
    let userInfo = userName + " " + mail;
    console.log(userInfo);
});
// -- scroll anim
const scroll = new Skroll()
    .add(".growLeft", {
        animation: "growInLeft",
        delay: 80,
        duration: 500,
        easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    })
    .add(".growRight", {
        animation: "growInRight",
        delay: 80,
        duration: 500,
        easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)",
    })
    .addAnimation("spinIn", {
        start: function (el) {
            el.style["transform"] = "rotate(-360deg) scale(.2,.2)";
            el.style["transform-origin"] = "50% 50%";
            el.style["opacity"] = 0;
        },
        end: function (el) {
            el.style["transform"] = "rotate(0deg) scale(1,1)";
            el.style["opacity"] = 1;
        }
    })
    .add(".spin", {
        animation: "spinIn",
        delay: 80,
        duration: 500,
        easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    })
    .init();
// -- popup
$(document).ready(function ($) {
    $('.popup-open').click(function () {
        $('.popup-fade').fadeIn();
        return false;
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });
    $('.popup-fade').click(function (e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
});