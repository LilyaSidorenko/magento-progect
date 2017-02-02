'use strict';

jQuery(function($) {

  $(window).on('swipeleft', function() {
      $('.order-data__order-block').addClass('order-data__order-block--active');
  });

  $(window).on('swiperight', function() {
      $('.order-data__order-block').removeClass('order-data__order-block--active');
  });
  
});