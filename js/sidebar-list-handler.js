'use strict';

jQuery(function($) {
  
  $('.sidebar__list').click(function(event) {
    var $target = $(event.target);

    if ($target.hasClass('sidebar__main-link')) {
      $target
        .toggleClass('sidebar__main-link--active')
        .siblings('.sidebar__sub-list')
        .slideToggle();

      event.preventDefault();
    }
  });

});