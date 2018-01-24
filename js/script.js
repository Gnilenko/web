

$(document).ready(function(){
  
 

  $('body').append('<button class=btn-up />');

  $('.btn-up').click(function(){
      $('body').animate({'scrollTop': 0});
      $('html').animate({'scrollTop': 0});
  });

});






