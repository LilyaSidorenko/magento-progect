'use strict';

jQuery(function($) {

  $(window).on('swipeleft', function() {
      $('.sidebar').addClass('sidebar--show');
  });

  $(window).on('swiperight', function() {
      $('.sidebar').removeClass('sidebar--show');
  });

});