/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

var position = $(window).scrollTop();



var isScrolling = false;
var index = 0;

var startWidth;
var startHeight;



$(window).on('beforeunload', function () {
  $('body').hide();
  $(window).scrollTop(0);
});


$(window).resize(function () {
  positionCircleClone();
});

function positionCircleClone() {
  var circle = document.getElementById('menuCircleSvg');
  var clone = document.getElementById('menuCircleSvgClone');
  var x = circle.getBoundingClientRect();
  console.log(x.left)
  clone.style.top = x.top + 'px';
  clone.style.left = x.left + 'px';
  clone.style.left = x.left + 'px';
  console.log(clone.style.left)
}


jQuery(document).ready(function ($) {
  positionCircleClone();

  //   setTimeout(function() {
  //     $('.c').addClass('open');
  // }, 2000);

  'use strict';

  var top_header = $('.parallax-content');
  top_header.css({ 'background-position': 'center center' }); // better use CSS

  $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({ 'background-position': 'center calc(50% + ' + (st * .5) + 'px)' });
  });


  $('body').scrollspy({
    target: '.fixed-side-navbar',
    offset: 200
  });




  // $(window).bind('mousewheel', function (e) {
  //   if ($('#menuView').css('visibility') != 'visible') {
  //     if (e.originalEvent.wheelDelta / 120 > 0) {
  //       if (!isScrolling) {
  //         //scroll up
  //         if (this.sections[this.index - 1]) {
  //           index--;
  //           isScrolling = true;
  //           $('html, body').animate({
  //             scrollTop: $("#" + this.sections[this.index]).offset().top
  //           }, 1200, () => {
  //             isScrolling = false;
  //           });
  //         }
  //       }
  //     }
  //     else {
  //       if (!isScrolling) {
  //         //scroll down
  //         if (this.sections[this.index + 1]) {
  //           index++;
  //           isScrolling = true;
  //           $('html, body').animate({
  //             scrollTop: $("#" + this.sections[this.index]).offset().top
  //           }, 1200, () => {
  //             isScrolling = false;
  //           });
  //         }
  //       }
  //     }
  //   }
  // });


  // smoothscroll on sidenav click

  $('.tabgroup > div').hide();
  $('.tabgroup > div:first-of-type').show();
  $('.tabs a').click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
      others = $this.closest('li').siblings().children('a'),
      target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();

  })

  var owl = $("#owl-testimonials");

  owl.owlCarousel({

    pagination: true,
    paginationNumbers: false,
    autoPlay: 6000, //Set AutoPlay to 3 seconds
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

  });


  setListeners();

});


function setListeners() {
  $('.linkedin').on("click", function () {
      location.href = 'https://www.linkedin.com/company/chilling-studios/about/?viewAsMember=true';
  });
  $('.instagram').on("click", function () {
      location.href = 'https://www.instagram.com/chilling.studios/';
  });
  $('.facebook').on("click", function () {
      location.href = 'https://www.facebook.com/Chillingstudios-100375035035397';
  });
  $('.twitter').on("click", function () {
      location.href = 'https://twitter.com/ChillingStudios';
  });
  $('.mail').on("click", function () {
      location.href="mailto:info@chillingstudios.com";
  });
}

function openMenu() {
  // var clone = document.getElementById('menuCircleSvgClone');
  // clone.style.width = '200vw'
  $('body').css('overflow-y', 'hidden');
  $('#lateralMenu').css('display', 'none');
  // $('#menuCircleSvgClone').addClass('open');


  var _this = $('.box');
  startHeight = _this.css("height");
  startWidth = _this.css("width");
  var newWidth = parseInt(_this.css("width")) + 10000,
    newHeight = parseInt(_this.css("height")) + 10000;
  // $('#menuCircleSvg').text('X');


  _this.
    css("z-index", 28).
    animate({
      width: newWidth + "px",
      height: newHeight + "px",
      marginTop: "-5000px",
      marginLeft: "-5000px"
    }, 1200, () => {
      $('#menuView').css('visibility', 'visible').css('z-index', '999');

    });
}

function openSection(section) {
  switch (section) {
    case 'Hola':
      window.location.href = "../../index.html";
      break;
    case 'Servicios':
      window.location.href = "../servicios/servicios.html";
      break;
    case 'Equipo':
      window.location.href = "../equipo/equipo.html";
      break;
    case 'Contacto':
      window.location.href = "../contacto/contacto.html";
      break;
  }
}

function closeMenuView() {
  $('#lateralMenu').css('display', 'block');
  var _this = $('.box');
  _this.css("z-index", 0);
  $('#menuView').css('visibility', 'hidden');
  _this.css("height", startHeight);
  _this.css("width", startWidth);
  _this.css("margin-left", 0);
  _this.css("margin-top", 0);
  $('body').css('overflow-y', 'auto');
  positionCircleClone();
}


function cumulativeOffset(element) {
  var top = 0, left = 0;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
};
