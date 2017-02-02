'use strict';

jQuery(function($) {
  
  $('.popup-tabs__tab-labels').on('click', 'a[data-tab]', function(event) {

    if ( !($(this).parent().hasClass('popup-tabs__tab-label--active')) ) {

      $('.popup-tabs__tab-label').removeClass('popup-tabs__tab-label--active');
      $(this).parent().addClass('popup-tabs__tab-label--active');

      var tab = '.' + $(this).attr('data-tab');
      $('.popup-tabs__sheet').hide();
      $(tab).show();
    }

    event.preventDefault();
  });

});