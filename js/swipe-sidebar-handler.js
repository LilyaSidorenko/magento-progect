'use strict';

jQuery(function($) {
  
  $(window).swipe({
    swipe: function(event, direction) {

      if (direction === 'left') {
          $('.sidebar').addClass('sidebar--show');
      } else if (direction === 'right') {
          $('.sidebar').removeClass('sidebar--show');
      }
    }
  });

});