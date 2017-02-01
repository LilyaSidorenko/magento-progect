'use strict';

jQuery(function($) {
  
  $('.list-handlers__buttons-block').click(function(event) {
    var $target = $(event.target);
    var $catalog = $('.catalog');

    if ($target.closest('a').hasClass('list-handlers__button--horizontal')) {
      $catalog.removeClass('catalog--tiles');

    } else if ($target.closest('a').hasClass('list-handlers__button--vertical')) {
      $catalog.addClass('catalog--tiles');

    }
    
    event.preventDefault();
  });

});