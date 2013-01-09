// Lab 1--change size of timestamp text to 80% of its current size 
$(document).ready(function() {
	$('.meta').css('fontSize', '0.8em');


// Lab 2--alternate row shading #efefef
//	$('.status:even').css('backgroundColor','#efefef');

// Lab 3--undo what you just did using class "zebra"

   $('.status:even').addClass('zebra');


// Lab 4--highlight each tweet on mouseover using "hover". first example is more explicit
  $('.status').hover( 
     function() {  // mouseover 
          $(this).addClass('zebraOver'); 
     }, 
     function() {  // mouseout 
          $(this).removeClass('zebraOver'); 
     } 
   );

//OR...for a simple mouseover to highligh on & off
//$('.status').hover( 
    // function() {  // mouseover 
    //      $(this).toggleClass('zebraOver'); 
   //  } 
 //  );
});

