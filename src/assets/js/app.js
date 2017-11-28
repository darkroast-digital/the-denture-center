// *************************************************************************
// *************************************************************************
// *************************************************************************

require('./bootstrap');



// #MODAL
// =========================================================================

$('.modal__trigger').click(() => {
    $('.modal').addClass('modal--open');
});

$('.modal__overlay, .modal__close').click(() => {
    $('.modal').removeClass('modal--open');
});

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        $('.modal').removeClass('modal--open');
    }
});



// #TABS
// =========================================================================

$('li[data-tab], .tab__content').first().addClass('is--active');
$('.tab__content').first().addClass('is--active');

$('li[data-tab]').click(function() {
    var thisTab = $(this).attr('data-tab');
    var tab = $('.tab__content' + '[data-tab="' + thisTab + '"]');

    $('li[data-tab]').removeClass('is--active');
    $(this).addClass('is--active');
    $('.tab__content').removeClass('is--active');
    tab.addClass('is--active');
});




// #ACCODIAN
// =========================================================================

$('.accordian__panel').find('.accordian__body').hide();
$('.accordian__panel').first().find('.accordian__body').addClass('is--active').show();

$('.accordian__title').click(function() {
    $('.accordian__body').removeClass('is--active').slideUp();
    $(this).next('.accordian__body').addClass('is--active').slideDown();
});



// #SLIDER
// ========================================================================

$('.js-slider').slick({
    arrows: true,
    dots: true,
    autoplay: true
});

$('.slick-arrow').empty();



// #MENU
// ========================================================================

var menuTrigger = document.querySelector('.menu__trigger');
var menu = document.querySelector('.menu');

menuTrigger.addEventListener('click', function () {
    this.classList.toggle('is--open');
    menu.classList.toggle('is--open');
});




// #FORM
// ========================================================================

var form = $('.form');

$(form).submit((e) => {
  e.preventDefault();

  axios.post('/contact/form', {
    name: $('[name="name"]').val(),
    email: $('[name="email"]').val(),
    message: $('[name="message"]').val(),
  })
  .then((response) => {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert success is--exiting">Your Message Was Sent!  We\'ll be in touch.</div>').insertAfter(form);
    setTimeout(function () {
        $('.alert').removeClass('is--exiting');
    });
    setTimeout(function () {
        $('.alert').addClass('is--exiting');
    }, 750);
    console.log('success' + response);
  })
  .catch((error) => {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert success">The was an error!  Give it another shot.</div>').insertAfter(form);
    setTimeout(function () {
        $('.alert').addClass('is--exiting');
    }, 1250);
    console.log('error' + error);
  });
});



// #GALLERY
// ========================================================================

var galleryImage = $('.gallery__image');
var lightbox = $('.lightbox');
var overlay = $('.overlay');
var close = $('.lightbox__close');
var lightboxContent = $('.lightbox__content');

galleryImage.click(function () {
  var images = $(this).find('ul').html();

  lightbox.addClass('is--active');
  lightboxContent.find('ul').html(images);
});

close.click(function () {
    lightbox.removeClass('is--active');
});

overlay.click(function () {
    lightbox.removeClass('is--active');
});



// #MODAL
// =========================================================================

$('.lightbox').on('click', 'img', function() {
    var image = $(this).attr('src');

    $(this).addClass('is--active');
    $('.modal').addClass('modal--open');

    $('.modal img').attr('src', image);
});



// // #MAP
// // ========================================================================

// var map = new GMaps ({
//     el: '#map',
//     lat: 43.468365,
//     lng: -80.519450,
//     zoomControl: false,
//     streetViewControl : false,
//     mapTypeControl: false,
//     overviewMapControl: false
// });


// var styles = [
//     {
//       stylers: [
//         { hue: "#4886F1" },
//         { saturation: 0 },
//         { brightness: 0 }
//       ]
//     }, {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [
//             { lightness: 10 },
//             { visibility: "simplified" }
//       ]
//     }, {
//         featureType: "road",
//         elementType: "labels",
//         stylers: [
//             { visibility: "on" }
//       ]
//     }
// ];

// map.addStyle({
//     styledMapName:"Styled Map",
//     styles: styles,
//     mapTypeId: "map_style"
// });

// map.setStyle("map_style");


// map.addMarker({
//     lat: 42.276682,
//     lng: -82.768273,
// });
