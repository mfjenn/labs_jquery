/**
	plugins solutions
*/

// Lab 1
$(document).ready(function() {
	$('#statuses').cycle({ 
	  fx: 'scrollDown',
	  speedIn: 500,
	  speedOut: 500,
	  timeout: 3000,
	  next: '#statuses'
	});
});

// Lab 2
$(document).ready(function() {
	$('#signup form').validate({
		rules: {
			fullname: {
				required: true
			},
			username: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 6
			},
			passconf: {
				equalTo: "#password"
			}
		},
		success: function(label) {
			label.addClass('valid');
		}
	});
});