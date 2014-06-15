var fatherDay = fatherDay || {};

$(document).ready(function(){
  alert('good to go!');
});

fatherDay.expandPicture = function(picture){
  picture.children('.info').fadeIn('slow');
};
