jQuery(document).ready(function ($) {

    let mobileHeight = document.documentElement.clientHeight;

    $('#mobile').css('display', 'inline');

    $('#mobileContainer').css('height', mobileHeight);
    $('#mobileContainer2').css('height', mobileHeight);

    positionCircleCloneMobile();
    $(document.body).css('overflow-x', 'hidden')
    $(window).css('overflow-x', 'hidden')
    $('html').css('height', '100vh');
    $('body').css('height', '100vh');
    setListeners();
});



function openMenuMobile() { 
  positionCircleCloneMobile();
  $('#menuCircleSvgMobile').css('visibility', 'visible')
    if ($('.box').css('width').split('px')[0] < 7000){
  
    console.log('a')
    $('body').css('overflow-y', 'hidden');
  
  
    var _this = $('.box');
    startHeight = _this.css("height");
    startWidth = _this.css("width");
    var newWidth = parseInt(_this.css("width")) + 7000,
      newHeight = parseInt(_this.css("height")) + 7000;
  
  
    _this.
      css("z-index", 28).
      animate({
        width: newWidth + "px",
        height: newHeight + "px",
        marginTop: "-5000px",
        marginLeft: "-5000px"
      }, 1200, () => {
        $('#menuViewMobile').css('visibility', 'visible').css('z-index', '999');
        $('#menuViewMobile').css('position', 'fixed').css('top', '0');
        $('#menuView').css('height', document.documentElement.clientHeight);
      });
    }
  }
  
  function closeMenuViewMobile() {
    var _this = $('.box');
    _this.css("z-index", 0);
    $('#menuViewMobile').css('visibility', 'hidden');
    _this.css("height", startHeight);
    _this.css("width", startWidth);
    _this.css("margin-left", 0);
    _this.css("margin-top", 0);
    $('body').css('overflow-y', 'auto');
    $('#menuCircleSvgMobile').css('visibility', 'hidden')
    // positionCircleCloneMobile();
  }

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
  
  function openSectionMobile(section) {
    switch (section) {
      case 'Hola':
        // window.location.href = "/index.html";
        window.location.href = "../../../../index.html";
        break;
      case 'Servicios':
        window.location.href = "../../../servicios/mobile/serviciosMobile.html";
        break;
      case 'Equipo':
        window.location.href = "../../../equipo/mobile/equipoMobile.html";
        break;
      case 'Contacto':
        window.location.href = "../../../contacto/mobile/contactoMobile.html";
        break;
    }
  }

  function positionCircleCloneMobile() {
    var circle = document.getElementById('menuCircleSvgMobile');
    var clone = document.getElementById('menuCircleSvgCloneMobile');
    var x = circle.getBoundingClientRect();
    console.log(x.left)
    clone.style.top = x.top + 'px';
    clone.style.left = x.left + 'px';
    clone.style.left = x.left + 'px';
    console.log(clone.style.left)
    
  }