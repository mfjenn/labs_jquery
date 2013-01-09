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

