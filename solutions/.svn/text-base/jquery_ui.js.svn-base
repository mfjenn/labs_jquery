/**
	jquery ui solutions
*/

// Pre-requisites
// DO NOT MODIFY
// Counter
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

//Hint
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

// Slide down status
$(function() {
	$('#tweetCounter').hide();
	$('#newStatus').css('height', '37px');
	$('#newStatus').one('click',function() {
		$('#newStatus').animate(
			{
				height: '56px'
			}
		);
		$('#tweetCounter').slideDown('slow', function() {
		 $('#tweetCounter').show();	
		});
	});
});

// Show/hide header footer
$(function() {
	$('#toggleButton').click( function() {
		$('#footer').toggle('slow');
		$('#header').toggle('slow', function() {
			if ( $('#header').is(':visible') ) {
				$('#toggleButton').val('Hide');
			} else {
				$('#toggleButton').val('Show');
			}
		});
	});
});

// Hover tweets
$('html body').delegate('li.status', 'mouseover', function() {
	$('li.status').mouseover( function() {
		$(this).addClass('zebraOver');
	});
	$('li.status').mouseout( function() {
		$(this).removeClass('zebraOver');
	});
});

// Remove tweets from DOM when click on cross
$('#statuses').delegate('img.delete', 'click', function(){
	$(this).parent().remove();
});

// Scroll Menu
$(document).ready(function() {
	$(window).scroll(function() {
		$('#sidemenu').stop().animate({
			top: $(document).scrollTop()
		},'slow');
	});
});

// Post to Server
$(function() {

	$('#tweetButton').click( function() {
		var statusText = $('#newStatus').val();
		
		var status = 
		$('<li class="status">' +
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
			
		status.hide().prependTo('#statuses').slideDown('slow').fadeOut('fast').fadeIn('fast');

		// Post to server
		console.log("about to send via ajax");
		$.ajax({
			type: 'POST',
			url: 'proxy.php/api/statuses/update.json',
			dataType: 'jsonp',
			data: {
				status: statusText
			},
			username: 'student',
			password: 'password',
			success: function(data) {
				console.log("success");
			},
			error: function(data) {
				console.log("error: "+data);
			}
		});
		
	});
});

//THIS IS THE SOLUTION

//LAB 1: Now create an accordion using jQuery UI
$(document).ready(function() {
	$('.menu_ul2').each(function() {
		$(this).find('li:last').css('border','none');
	});
	$('.menu_ul1').accordion({
		header: ".menu_li1"
	});
});

//LAB 2: Create a basic tab navigation using jQuery UI
$(document).ready(function() {
	$("#tweets").tabs();
});

//LAB 3: Improve the tab navigation so you can dynamically load the public timeline using JSONP
//Request http://yamba.marakana.com/api/statuses/public_timeline.json?callback=?
$(function(){
	var tabOpts = {
		select: function(event, ui) {
			ui.tab.toString().indexOf("publicstatuses") != -1 ? getData() : null ;
			function getData() {
				$("#publicstatuses").empty();
				$.getJSON( "http://yamba.marakana.com/api/statuses/public_timeline.json?callback=?",
					function(data) {
						$.each(data, function() {
							var $status = $('<li class="status">' +
					                          '<img class="icon delete" src="images/icon_delete.png" alt="delete" />' +
					                          '<div class="data">' +
					                            '<span class="user"><a href="#" class="url">' +
					                              '<img width="48" height="48" src="' +
					 	                    					this.user.profile_image_url + '" alt="" class="photo">' +
					                              '<span class="nickname">' + this.user.name + '</span></a></span>' +
					                              '<span class="text">' + this.text +
					                              '</span>' +
					                          '</div>' +
					                          '<div class="meta">' +
					                            '<span class="timestamp">' + this.created_at + '</span> ' +
					                            '<span class="source">from ' + this.source + '</span>' +
					                          '</div>' +
					                        '</li>');
							$status.prependTo('#publicstatuses');
						});
					});
			}
		}
	}
	$("#tweets").tabs(tabOpts);
});

//LAB 4: Create a welcome dialog when the page has been loaded
$(document).ready(function() {
	$('#dialog').dialog();
});

//LAB 5: Ask for confirmation when the user click to delete a tweet, if press yes delete it. if press no do nothing
$(document).ready(function() {
	$('#timeline').delegate('img.delete', 'click', function(){
		var $tweet=$(this).parent();
		$( "#confirm" ).dialog({
			title: "Delete Tweet",
			resizable: false,
			modal: true,
			buttons: {
				"Yes": function() {
					$(this).dialog("close");
					$tweet.fadeOut('slow',function() {
						$(this).remove();
					});
				},
				"No": function() {
					$(this).dialog("close");
				}
			}
		});
	});
});

//LAB 6: Implement drag and drop on yamba. we want to make any tweets "draggable". We then want to make the trash "droppable"
// The trash can only accept the tweets and nothing else. Remove the tweets when the tweets are dropped on the trash (without modal)
$(document).ready(function() {

	//draggable does not handle event delegation...
	$("#timeline").delegate(".status", "mouseenter", function(event) {
	    $(this).draggable({
			distance:20,
			opacity:0.7,
			zIndex:1000,
			revert:"invalid"
		});
	});
	
	//Make the trash being droppable
	$('#trash').droppable({
		accept:".status",
		activeClass:"ui-state-hover",
		hoverClass:"ui-state-active",
		tolerance:"pointer",
		drop: function(event,ui) {
			var $tweet = ui.draggable;
			$tweet.fadeOut('slow',function() {
				$(this).remove();
			});
		}
	});
});
