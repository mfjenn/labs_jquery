/**
	ajax solutions
*/

// Pre-Requisites
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

$(document).ready(function() {
	$(window).scroll(function() {
		$('#sidemenu').stop().animate({
			top: $(document).scrollTop()
		},'slow');
	});
});

$(document).ready(function() {
	//First hide all element but first
	$('#sidemenu .menu_li1:not(:first)').next('ul').hide();

	// Remove borders for the last li of each .menu_ul2
	$('.menu_ul2').each(function() {
		$(this).find('li:last').css('border','none');
	});

	// When clicking on an li1
	$('#sidemenu .menu_li1').click(function() {
		//Get the child ul
		var $child_ul = $(this).next('ul');
		// Check if that ul is hidden
		if ($child_ul.is(':hidden')) {
			// If this ul is hidden
			// Find other that are visible and hide them
			$('.menu_ul2:visible').slideUp('slow');
			//Show the hidden one
			$child_ul.slideDown('slow');
		}
		return false;
	});
});

//General function to use to display a status
var statusHTML = function( status ) {
					var ret = '<li class="status">' +
	                            '<img class="icon delete" src="images/icon_delete.png" alt="delete" />' +
	                            '<div class="data">' +
	                              '<span class="user"><a href="#" class="url">' +
	                                '<img width="48" height="48" src="' +
	 	                      					status.user.profile_image_url + '" alt="" class="photo">' +
	                                '<span class="nickname">' + status.user.name + '</span></a></span>' +
	                                '<span class="text">' + status.text +
	                                '</span>' +
	                            '</div>' +
	                            '<div class="meta">' +
	                              '<span class="timestamp">' + status.created_at + '</span> ' +
	                              '<span class="source">from ' + status.source + '</span>' +
	                            '</div>' +
	                          '</li>';

					return ret;
				};

// Lab 1 - Loads public timeline from the server

//$(document).ready( function() {
//	$.getJSON( "http://yamba.marakana.com/api/statuses/public_timeline.json?callback=?",
//			    function (data) {
//					$.each(data, function() {
//						var html = statusHTML(this);
//						$(html).appendTo('#statuses');
//					});
//				});
//});

// Lab 2 - Read Friends Timeline

$(document).ready( function () {
	$.ajax({
		type:	'GET',
		url:	'proxy.php/api/statuses/friends_timeline.json',
		//url:	'http://yamba.marakana.com/api/statuses/friends_timeline.json',
		dataType:	'jsonp',
		username:	'student',
		password:	'password',
		success:	function (data) {
						$.each(data, function() {
							var html = statusHTML(this);
							$(html).appendTo('#statuses');
						});
					},
		error:		function (data) {
						console.log("Failed: " + data);
					}
	});
});

// Lab 3 - Post to Server

$(document).ready( function () {
	$('#tweetButton').click( function () {
		var statusText = $('#newStatus').val();

		$('.status:first')
			.clone()
			.find('.text')
				.text(statusText)
			.end()
			.prependTo('#statuses');

		console.log("Posting to server");

		$.ajax({
			type:		'POST',
			url:		'proxy.php/api/statuses/update.json',
			dataType:	'jsonp',
			data:		{
							status:	statusText
						},
			username:	'student',
			password:	'password',
			success:	function (data) {
							console.log("Success");
						},
			error:	function (data) {
							console.log("Failed: " + data);
						}
		});
	});
});
