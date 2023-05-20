$(document).ready(function(){

    var $sm = 480;
    var $md = 768;
 
    function resizeThis() {
       $imgH = $('.middle img').width();
       if ($(window).width() >= $sm) {
          $('.left,.right,.section').css('height', $imgH);
       } else {
          $('.left,.right,.section').css('height', 'auto');
       }
    }
 
    resizeThis();
 
    $(window).resize(function(){
       resizeThis();
    });
 
    $(window).scroll(function() {
       $('.section').each(function(){
          var $elementPos = $(this).offset().top;
          var $scrollPos = $(window).scrollTop();
 
          var $sectionH = $(this).height();
          var $h = $(window).height();
          var $sectionVert = (($h/2)-($sectionH/4));
 
 
          if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
             $(this).addClass('animate');
          } else {
             $(this).removeClass('animate');
          }
       });
    });
 
    $('.btn-primary').click(function(){
       alert('I lied');
    });
 });
 
 $(function() {
   $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000);
         return false;
       }
     }
   });
 });

// *********************************

$('.slide-nav').on('click', function(e) {
   e.preventDefault();
   // get current slide
   var current = $('.flex--active').data('slide'),
     // get button data-slide
     next = $(this).data('slide');
 
   $('.slide-nav').removeClass('active');
   $(this).addClass('active');
 
   if (current === next) {
     return false;
   } else {
     $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
     $('.flex--active').addClass('animate--end');
     setTimeout(function() {
       $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
       $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
     }, 800);
   }
 });
 $(document).ready(function(){

   var $sm = 480;
   var $md = 768;

   function resizeThis() {
      $imgH = $('.middle img').width();
      if ($(window).width() >= $sm) {
         $('.left,.right,.section').css('height', $imgH);
      } else {
         $('.left,.right,.section').css('height', 'auto');
      }
   }

   resizeThis();

   $(window).resize(function(){
      resizeThis();
   });

   $(window).scroll(function() {
      $('.section').each(function(){
         var $elementPos = $(this).offset().top;
         var $scrollPos = $(window).scrollTop();

         var $sectionH = $(this).height();
         var $h = $(window).height();
         var $sectionVert = (($h/2)-($sectionH/4));


         if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
            $(this).addClass('animate');
         } else {
            $(this).removeClass('animate');
         }
      });
   });

   $('.btn-primary').click(function(){
      alert('I lied');
   });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

window.addEventListener('load', () => {
   let portfolioContainer = select('.portfolio-container');
   if (portfolioContainer) {
     let portfolioIsotope = new Isotope(portfolioContainer, {
       itemSelector: '.portfolio-item',
       layoutMode: 'fitRows'
     });

     let portfolioFilters = select('#portfolio-flters li', true);

     on('click', '#portfolio-flters li', function(e) {
       e.preventDefault();
       portfolioFilters.forEach(function(el) {
         el.classList.remove('filter-active');
       });
       this.classList.add('filter-active');

       portfolioIsotope.arrange({
         filter: this.getAttribute('data-filter')
       });
       portfolioIsotope.on('arrangeComplete', function() {
         AOS.refresh()
       });
     }, true);
   }

 });
 window.addEventListener('load', () => {
   let portfolioContainer = select('.portfolio-container');
   if (portfolioContainer) {
     let portfolioIsotope = new Isotope(portfolioContainer, {
       itemSelector: '.portfolio-item',
       layoutMode: 'fitRows'
     });

     let portfolioFilters = select('#portfolio-flters li', true);

     on('click', '#portfolio-flters li', function(e) {
       e.preventDefault();
       portfolioFilters.forEach(function(el) {
         el.classList.remove('filter-active');
       });
       this.classList.add('filter-active');

       portfolioIsotope.arrange({
         filter: this.getAttribute('data-filter')
       });
       portfolioIsotope.on('arrangeComplete', function() {
         AOS.refresh()
       });
     }, true);
   }

 });