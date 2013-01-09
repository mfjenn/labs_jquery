/**
	dom_manipulation solutions
*/

// Lab 1

//$(document).ready( function () {
//	var tweetTemplate = '<li class="status">'
//					+ '<img class="icon delete" src="images/icon_delete.png" alt="delete" />'
//					+ '<div class="data">'
//					+ '<span class="user"><a href="#" class="url">'
//					+ '<img width="48" height="48" src="images/slashdot.png" alt="" class="photo">'
//					+ '<span class="nickname">Slashdot</span></a></span>'
//					+ '<span class="text">Happy Pi Day'
//					+ '<a href="http://bit.ly/eU3ccR" class="url">http://bit.ly/eU3ccR</a>'
//					+ '</span>'
//					+ '</div>'
//					+ '<div class="meta">'
//					+ '<span class="timestamp">Now</span> '
//					+ '<span class="source">from web</span>'
//					+ '</div>'
//					+ '</li>';
//
//	$('#tweetButton').click( function () {
//		console.log("You clicked the tweet button");
//
//		var tweetText = $('#newStatus').val();
//		console.log("Tweet message: " + tweetText);
//
//		// Clear the textarea
//		$('#newStatus').val("");
//
//		// Create new status element
//		$(tweetTemplate)
//			.find('.text')				// Set its text
//				.text(tweetText)
//			.end()
//			.find('.timestamp')			// Set its timestamp
//				.text( new Date().toLocaleString() )
//			.end()
//			.prependTo('#statuses');	// Insert it at the top
//	});
//});


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
