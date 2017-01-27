'use strict';

jQuery(function($) {

  $(window).swipe({
    swipe: function(event, direction) {

      if (direction === 'left') {
          $('.order-data__order-block').addClass('order-data__order-block--active');
      } else if (direction === 'right') {
          $('.order-data__order-block').removeClass('order-data__order-block--active');
      }
    }
  });
  
});