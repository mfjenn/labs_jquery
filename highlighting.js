$(document).ready(function() {
  $('.line:odd').addClass('zebra');

  $('.line').hover( 
     function() {  // mouseover 
          $(this).addClass('zebraOver'); 
     }, 
     function() {  // mouseout 
          $(this).removeClass('zebraOver'); 
     } 
   );
});

