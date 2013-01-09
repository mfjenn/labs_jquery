$( function () {
	// Lab 1--change the background of all the statuses except the first one to yellow. 
	//$('.status:gt(0)').css('backgroundColor', 'yellow');
	//OR...
	$('.status').not(':first').css('backgroundColor', 'yellow');
	// Lab 2--change the background of the "hide" button to yellow. 
	//$('div input').css('backgroundColor', 'yellow');
	//OR
	$(':button').css('backgroundColor', 'yellow');
	// Lab 3--add a 1 px, black, dashed border around all of the status photos--NOT all of the photos. 
	$('.photo').css({
	  borderWidth: '1px', 
	  borderColor: 'black', 
	  borderStyle: 'dashed'
	  })
	// Lab 4--select all links that contain "bit.ly" and highlight them in red
	$('a[href*="bit.ly"]').css('backgroundColor', 'red');
	// Lab 5--creat an alert with # of div tags on the page
   ///alert ('There are ' + $('div').length + ' div tags on this page.');
});

//{ 'backgroundColor': 'red', 
 // 'color': 'white', 
 //}
