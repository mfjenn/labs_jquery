// Lab 1

$(document).ready( function () {
	var tweetTemplate = '<li class="status">'
					+ '<img class="icon delete" src="images/icon_delete.png" alt="delete" />'
					+ '<div class="data">'
					+ '<span class="user"><a href="#" class="url">'
					+ '<img width="48" height="48" src="images/slashdot.png" alt="" class="photo">'
					+ '<span class="nickname">Slashdot</span></a></span>'
					+ '<span class="text">Happy Pi Day'
					+ '<a href="http://bit.ly/eU3ccR" class="url">http://bit.ly/eU3ccR</a>'
					+ '</span>'
					+ '</div>'
					+ '<div class="meta">'
					+ '<span class="timestamp">Now</span> '
					+ '<span class="source">from web</span>'
					+ '</div>'
					+ '</li>';

	$('#tweetButton').click( function () {
		console.log("You clicked the tweet button");

		var tweetText = $('#newStatus').val();
		console.log("Tweet message: " + tweetText);

		// Clear the textarea
		$('#newStatus').val("");

		// Create new status element
		$(tweetTemplate)
			.find('.text')				// Set its text
				.text(tweetText)
			.end()
			.find('.timestamp')			// Set its timestamp
				.text( new Date().toLocaleString() )
			.end()
			.prependTo('#statuses');	// Insert it at the top (prepend)
	});
});


// Lab 2
// Lab 3

$(document).ready( function () {

	// Handle new status messages
	$('#tweetButton').click( function () {
		console.log("You clicked the tweet button");

		var tweetText = $('#newStatus').val();
		console.log("Tweet message: " + tweetText);

		// Clear the textarea
		$('#newStatus').val("");

		// Create new status element
		$('.status:first')
			.clone()					// Clone the latest status
			.find('.text')				// Set its text
				.text(tweetText)
			.end()
			.find('.timestamp')			// Set its timestamp
				.text( new Date().toLocaleString() )
			.end()
			.prependTo('#statuses');	// Insert it at the top
	});

	// Handle status deletion
	$('.status img.delete').click( function () {
		console.log("Deleting status");
		$(this).parent().remove();
	});
});

///My own text that does not work*************************************


//$(function() {
//	$('#tweetButton').click(function() {
//   	var status = $('#newStatus').val();

//  $('<li class="status">'
//     + '<img class="icon delete" src="images/icon_delete.png" alt="delete" />'
 //    + '<div class="data">'
 //      + '<span class="user"><a href="#" class="url">' 
 //       + '<img width="48" height="48" src="images/marakana.png" alt="" class="photo">'
 //        + '<span class="nickname">Marakana</span></a></span>'
 //      + '<span class="text"> + status + </span>'
 //    + '</div>'
 //    + '<div class="meta">'
  //     + '<span class="timestamp">seconds ago</span>'
//       + '<span class="source">from web</span>'
  //   + '</div>
//     +'</li>').prependTo("#statuses")
//});
//});

//$( function () {
//  $('#tweetButton').click( function () {
// alert("you tweeted");
	
   // var status = $('#newStatus').val();
   // alert("Tweet Message: " + tweetText);
		
//	$('<li class="status">' +
      //'<img class="icon delete" src="images/icon_delete.png" alt="delete" />' +
   //   '<div class="data">' +
        //'<span class="user"><a href="#" class="url">' +
       //   '<img width="48" height="48" src="images/marakana.png" alt="" class="photo">' +
      //      '<span class="nickname">Marakana</span></a></span>' +
    //    '<span class="text">' + status + '</span>' +
    //  '</div>' +
   //   '<div class="meta">' +
    //    '<span class="timestamp">seconds ago</span> ' +
    //    '<span class="source">from web</span>' +
    //  '</div>' +
   // '</li>').prependTo('#statuses');
//$('#newStatus').val("");
 //  });

//});

 

//Lab 2- clone your status update
//$(function() {
//	$('#tweetButton').click( function() {
//		var statusText = $('#newStatus').val();
		
//		var status = $('.status:first').clone();
		
	//	status.find('.nickname').html('Marakana');
//		status.find('.photo').attr('src','images/marakana.png');
//		status.find('.text').html(statusText);
//		status.find('.timestamp').html('seconds ago');

	//	status.prependTo('#statuses');
		
//	});
//});

// Lab 3
//$(function() {
//	$('img.delete').click( function() {
//		$(this).parent().remove();
//	});
//});

