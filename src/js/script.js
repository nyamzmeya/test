$(document).ready(function() {
    var carousel = $(".carousel").waterwheelCarousel({
        flankingItems: 7,
        opacityMultiplier: 1,
        linkHandling: 1,
        animationEasing: 'swing',
        autoPlay: 0,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              flankingItems: 2}}]
      });
    
    $('#prev').bind('click', function () {
        carousel.prev();
        return false
      });
    
    $('#next').bind('click', function () {
        carousel.next();
        return false;
      });
      
});

