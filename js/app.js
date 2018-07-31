var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


$(document).ready(function(){  
    if(!isMobile) {     
  var scroll_start = 0;
  var startchange = $('.heading');
  var offset = startchange.offset();
   if (startchange.length){
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $(".navbar-light").css('background-color', 'rgba(18,16,30, 1)');
      } else {
         $('.navbar-light').css('background-color', 'transparent');
      }
  });
   }
}
});