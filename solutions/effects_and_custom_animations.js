// Pre-requisites
// DO NOT MODIFY
$(function() {
	var hint = 'Enter your 140 character status update.';
	$('#newStatus').focusin( function() {
		if( $(this).val() === hint ) {
			$(this).val('');
			$('#counter').text(140);
		}
	});
	$('#newStatus').blur( function() {
		if( $(this).val() === '' ) {
			$(this).val(hint);
		}
	});

	$('html body').delegate('li.status', 'mouseover', function() {
		$('li.status').mouseover( function() {
			$(this).addClass('zebraOver');
		});
		$('li.status').mouseout( function() {
			$(this).removeClass('zebraOver');
		});
	});

	var letterCounter = function(event) {
		var count = $(this).val().length;
		var remaining = 140 - count;
		$('#counter').text(remaining);

		if( remaining < 0) {
			$('#tweetButton').attr('disabled','disabled');
			$('#counter').addClass('danger');
		} else if( remaining <= 10) {
			$('#tweetButton').removeAttr('disabled');
			$('#counter').addClass('danger');
		} else {
			$('#tweetButton').removeAttr('disabled');
			$('#counter').removeClass('danger');
		}
	};
	$('#newStatus').keydown(letterCounter);
	$('#newStatus').keyup(letterCounter);
	$('#newStatus').keypress(letterCounter);

	// Lab 1
	$('#top').click( function() {
		$('html, body').animate( { scrollTop: 0 }, 'slow');
	});

	// Lab 2
	//$('#toggleButton').click( function () {
	//	$('#header, #footer').hide('slow');
	//});

	// Lab 3/4
	$('#toggleButton').toggle(
		function () {
			$('#header, #footer').hide('slow');
			$(this).val("Show");
		},
		function () {
			$('#header, #footer').show('slow');
			$(this).val("Hide");
		}
	);

	// Lab 5
	$('#tweetButton').click( function () {
		var $newStatus = $('#newStatus');
		var tweetText = $newStatus.val();

		// Clear the textarea and reset the count
		$newStatus.val(hint);
		$('#count').text(140);

		// Create new status element
		$('.status:first')
			.clone()					// Clone the latest status
			.find('.text')				// Set its text
				.text(tweetText)
			.end()
			.find('.timestamp')			// Set its timestamp
				.text( new Date().toLocaleString() )
			.end()
			.prependTo('#statuses')		// Insert it at the top
			.hide()						// Hide it
			.slideDown('slow')			// Display it with fancy effects
			.fadeOut('fast')
			.fadeIn('fast');
	});

	// Lab 6
	$('#statuses').delegate('img.delete', 'click', function () {
		$(this).parent().hide('slow', function () {
			// Wait until the animation is complete before deleting
			$(this).remove();
		});
	});

	// Lab 7
	$('#tweetCounter').hide();
	$('#newStatus').css('height', '37px');
	$('#newStatus').one('click', function() {
		$('#tweetCounter').show('slow');
		$('#newStatus').animate({'height': '56px'}, 'slow');
	});

	// Lab 8a
	//$(window).scroll(function() {
	//	$('#sidemenu').stop().animate({
	//		top: $(document).scrollTop()
	//	}, 'slow', 'swing');
	//});

	// Lab 8b
	var initialTopPostion = $('#sidemenu').offset().top;
	$(window).scroll(function() {
		if ($(document).scrollTop() >= initialTopPostion)
		{
			var newPosition = $(document).scrollTop() - initialTopPostion;
		}
		else {
			var newPosition = 0;
		}
		$('#sidemenu').stop().animate({
			top : newPosition
		});
	});


	// Lab 9

	// Hide all menus except for the first
	$('#sidemenu .menu_li1:gt(0)').next('ul').hide();

	// Remove the borders of the last child of each .menu_ul2
	$('#sidemenu .menu_ul2 > li:last-child').css('border', 'none');

	// Click to display menu and hide others
	$('#sidemenu .menu_li1').click( function () {
		//Get the child ul
		var $childUl = $(this).next('ul');
		// Check if that ul is hidden
		if ($childUl.is(':hidden')) {
			// If this ul is hidden
			// Find other that are visible and hide them
			$('.menu_ul2:visible').slideUp('slow');
			//Show the hidden one
			$childUl.slideDown('slow');
		}
		return false;
	});

});
