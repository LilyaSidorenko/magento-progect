'use strict';

jQuery(function($) {
  $(window).on('swipeleft', function(event) {
    $('.order-data__order-block').addClass('order-data__order-block--active');

    event.preventDefault();
  });


  $(window).on('swiperight', function(event) {
    $('.order-data__order-block').removeClass('order-data__order-block--active');

    event.preventDefault();
  });
});