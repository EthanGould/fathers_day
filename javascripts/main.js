var fatherDay = fatherDay || {};

$(document).ready(function(){
  $('.caption-container').children().hide();
  $('.picture').on('click', fatherDay.expandPicture);
});

fatherDay.expandPicture = function(){
  var $selector = $(this).attr('id');
  if($('.caption-container').children().hasClass($selector)){
    $('.caption-container').children('.' + $selector).fadeToggle().text();
  }
};
