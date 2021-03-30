/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

var position = $(window).scrollTop();



var isScrolling = false;
var index = 0;

var sections = [
  'home',
  'services',
  'portfolio',
  'our-story',
  'contact-us',
  'footer',
]

function moveTo(i) {
  this.index = i;
  isScrolling = true;
  $('html, body').animate({
    scrollTop: $("#" + this.sections[this.index]).offset().top
  }, 1500, () => {
    isScrolling = false;
  });
}

$(window).on('beforeunload', function () {
  $('body').hide();
  $(window).scrollTop(0);
});

jQuery(document).ready(function ($) {



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




  $(window).bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
      if (!isScrolling) {
        //scroll up
        if (this.sections[this.index - 1]) {
          index--;
          isScrolling = true;
          $('html, body').animate({
            scrollTop: $("#" + this.sections[this.index]).offset().top
          }, 1200, () => {
            isScrolling = false;
          });
        }
      } 
    }
    else {
      if (!isScrolling) {
        //scroll down
        if (this.sections[this.index + 1]) {
          index++;
          isScrolling = true;
          $('html, body').animate({
            scrollTop: $("#" + this.sections[this.index]).offset().top
          }, 1200, () => {
            isScrolling = false;
          });
        }
      }
    }
  });


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


});