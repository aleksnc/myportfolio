$(function(){
  function getCoordinates(elem, e){
    var cor = {};
    var parentOffset = $(elem).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    return cor = {
      x: relX,
      y: relY
    }
  }
  var $page = $('#page');
  $('.img_paralax').on('mousemove', function(e){  
    cor = getCoordinates(this, e);
    if(cor.y < 320){
     $page.removeClass('bottomer').addClass('topper'); 
    }
    if(cor.y > 360){
      $page.removeClass('topper').addClass('bottomer'); 
    }
    if(cor.y > 320 && cor.y < 360){
    $page.removeClass('bottomer topper'); 
    }
    
    if(cor.x < 150){
     $page.removeClass('left').addClass('right'); 
    }
    if(cor.x > 180){
     $page.removeClass('right').addClass('left');
    }
    if(cor.x > 150 && cor.x < 180){
    $page.removeClass('left right');
    }
    
  }).on('mouseleave', function(){
    $page.removeClass();
  });

});






