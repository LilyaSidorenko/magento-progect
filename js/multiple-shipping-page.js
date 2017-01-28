'use strict';

jQuery(function($) {
  
  $('.purchase__select').each(function(index, element) {

    var $element = $(element);
    var $box = $element.closest('.fake-select');
    var $textarea = $box.find('.fake-select__textarea');

    var text = $element.find('option:selected').text();

    $textarea.val(text);
  });


  $('.fake-select__textarea')
    .focus(showList)
    .blur(hideList)
    .keypress(hideList);


  $('.fake-select__item').click(function(event) {

    var $target = $(event.target);
    var $box = $target.closest('.fake-select');
    var $textarea = $box.find('.fake-select__textarea');
    var $select = $box.find('.purchase__select');

    var dataValue = $target.attr('data-val');
    var inputValue = $target.text();
    
    $select.val(dataValue);
    $textarea.val(inputValue);
    
  });


  $('.purchase__select').change(function(event) {

    var $target = $(event.target);
    var $box = $target.closest('.fake-select');
    var $textarea = $box.find('.fake-select__textarea');

    var text = $target.find('option:selected').text();

    setTimeout(function() {$textarea.val(text)}, 50);

  });
  

  function showList(event) {

    var $target = $(event.target);
    var $box = $target.closest('.fake-select');
    var $list = $box.find('.fake-select__list');

    $list.show();
  }


  function hideList(event) {
    console.log('faic');
    var $target = $(event.target);
    var $box = $target.closest('.fake-select');
    var $list = $box.find('.fake-select__list');

    setTimeout(function() {$list.hide()}, 100);
  }

});