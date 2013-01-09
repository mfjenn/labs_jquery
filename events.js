

/**
	events solutions
*/

//Pre-requisites
//DO NOT MODIFY
$(function() {
	$('#tweetButton').click( function() {
		var statusText = $('#newStatus').val();
		$('#newStatus').val('');

		var status = $('.status:first').clone();

		status.find('.nickname').html('Marakana');
		status.find('.photo').attr('src','images/marakana.png');
		status.find('.text').html(statusText);
		status.find('.timestamp').html('seconds ago');

		status.prependTo('#statuses');

	});
});

// Lab 1--uses the red "X to delete any tweet"
$('#statuses').delegate('img.delete', 'click', function(){
	$(this).parent().remove();
});

// Lab 2
$(function() {
	$('#tweetCounter').hide();
	$('#newStatus').css('height', '37px');
	$('#newStatus').one('click', function() {
		$('#tweetCounter').show();
		$('#newStatus').css('height', '56px');
	});
});

// Lab 3--make the letter counter work. 
$(function() {
  var letterCounter = function() {
		var count = $(this).val().length;
		var remaining = 140 - count;
		$('#counter').text(remaining);
	};

	$('#newStatus').keydown(letterCounter);
	$('#newStatus').keyup(letterCounter);
	$('#newStatus').keypress(letterCounter);
});

//OR...
//$('#newStatus').bind('keydown keyup keypress, letterCounter);

// Lab 4
$(function() {
	var letterCounter = function(event) {
		var count = $(this).val().length;
		var remaining = 140 - count;
		$('#counter').text(remaining);

		if( remaining < 0) {
			$('#tweetButton').attr('disabled','disabled');
			$('#counter').addClass('danger');// turns text red
		} else if( remaining <= 10) {
			$('#tweetButton').removeAttr('disabled');				
			$('#counter').addClass('danger');// turns text red
		} else {
			$('#tweetButton').removeAttr('disabled');				
			$('#counter').removeClass('danger');	//removes red		
		}
	};
	$('#newStatus').keydown(letterCounter);
	$('#newStatus').keyup(letterCounter);
	$('#newStatus').keypress(letterCounter);
});

// Lab 5
$(function() {
	$(window).resize( function() {//should use a function with a vairable to decide when the page loads, which layout to use. 
		if( $('body').width() < 500 ) {
			$('#wrap').css('min-width','300px');
			$('#content').css('width', '85%');
		} else {
			$('#wrap').css('min-width','500px');
			$('#content').css('width', '66%');
		}
	})
});


// Lab 6
$(function() {
	var hint = 'Enter your 140 character status update.';
	$('#newStatus').focusin( function() {
		if( $(this).val() === hint ) {
			$(this).val('');	
		}
	});
	$('#newStatus').blur( function() {
		if( $(this).val() === '' ) {
			$(this).val(hint);	
		}
	});
});

// Lab 7
$('#statuses').delegate('li.status', 'mouseover', function() {
	$('li.status').mouseover( function() {
		$(this).addClass('zebraOver');
	});
	$('li.status').mouseout( function() {
		$(this).removeClass('zebraOver');
	});
	
//	$('#tweetButton').click( function() {
//			var statusText = $('#newStatus').val();
//			$('#newStatus').val(hint);
//			$('#counter').text(140);

	//		var status = $('.status:first').clone();

	//		status.find('.nickname').html('Marakana');
//			status.find('.photo').attr('src','images/marakana.png');
//			status.find('.text').html(statusText);
//			status.find('.timestamp').html('seconds ago');

	//		status.prependTo('#statuses');

//		});
	
});




















// Lab 6 get hint to go away when user clicks. Should be hint text only. 

// Lab 7 bg color changing--hover.