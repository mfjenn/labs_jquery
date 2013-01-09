
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
//zebra striping as you go over
$('html body').delegate('li.status', 'mouseover', function() {
	$('li.status').mouseover( function() {
		$(this).addClass('zebraOver');
	});
	$('li.status').mouseout( function() {
		$(this).removeClass('zebraOver');
	});
});

$(function() {
	var letterCounter = function(event) {
		var count = $(this).val().length;
		var remaining = 140 - count;
		$('#counter').text(remaining);
		
		if( remaining < 0) {
			$('#tweetButton').attr('disabled','disabled');
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
});

// Lab 1
$(function() {
  $('#top').click( function() {
	$('html, body').animate( { scrollTop: 0}, '50000');
  });
});



// hide & show header
$(function() {
$('#toggleButton').click( function() {
  $('#header').toggle('4000');
  $('#footer').toggle('4000', function(){
	if ($('#header').is(':visible')) {
	 $('#toggleButton').val('Hide') 
	} else {
		$('#toggleButton').val('Show') 
	  }
    });
  });
});

// add tweet to the top of the page, but make it fade in slowly. 
$(function() {
	$('#tweetButton').click( function() {
		var statusText = $('#newStatus').val();
		$('#newStatus').val('');

		var status = $('<li class="status">' +
          '<img class="icon delete" src="images/icon_delete.png" alt="delete" />' +
          '<div class="data">' +
            '<span class="user"><a href="#" class="url">' +
              '<img width="48" height="48" src="images/marakana.png" alt="" class="photo">' +
              '<span class="nickname">Marakana</span></a></span>' +
              '<span class="text">' + statusText +
              '</span>' +
          '</div>' +
          '<div class="meta">' +
            '<span class="timestamp">seconds ago</span> ' +
            '<span class="source">from web</span>' +
          '</div>' +
        '</li>');
	status.hide().prependTo('#statuses').slideDown('slow').fadeOut('slow').fadeIn('slow');
	});
});

// delete all tweets slowly
$('#statuses').delegate('img.delete', 'click', function(){
	$(this).parent().fadeOut('slow', function() {
		$(this).remove();
	});
});
// resize text box slowly. 
$(function() {
	$('#newStatus').css('height', '37px');
	$('#newStatus').one('click', function() {
		$('#newStatus').css('height', '56px');
	});
});



	$(window).scroll(function() {
			$('#sidemenu').stop().animate({ //it's necessary to "stop" the animation so it doesn't keep going after user scrolling stops. 
				top: $(document).scrollTop()
			},'slow', 'swing');
		});
	
//hide all except for first menu
$('#sidemenu .menu_li1:gt(0)').next('ul').hide();

//remove the borders of the last child of each menu _ul2
$('#sidemenu .menu_ul2 > li:last-child').css('border', 'none');

//click to display menu and hide others--(not finished)
$('#sidemenu .menu_li1').click(function (){
	
	
});
















