// Lab 1 --makes tweets cycle
$(document).ready(function() {
	$('#statuses').cycle({ 
	  fx: 'scrollDown',
	  speedIn: 500,
	  speedOut: 500,
	  timeout: 3000,
	  next: '#statuses'
	});
});

//$(document).ready (function() {
//	$(’#statuses’).cycle({
//		fx: 'fade', 
//		speedIn: 3000, 
//		speedOut: 3000, 
//		timeout: 0, 
//		next: ’#photos’ 
//	});
//});

//$(document).ready (function() {
//	$('ol #status').cycle({ 
//	  fx: 	'shuffle', 
	 
//	  speedIn: '3000',
//	  speedOut: '3000',
	  
//	  next: '#status'
//	});
//});


// Lab 2 --

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

//$(document).ready(function() {
//  $(’#signup form’).validate({ 
//		rules: {
//		fullname: {
//			required: true
//				},
//		username: {
//			required: true
//						},
//		password: {
//			required: true,
//			minlength: 6
//			},
//		passconf: {
//			equalTo: "#password"
//			}
//		},
//		email: {
//			required: true,
//		email: true
 //			},
//	
//			success: function(label) {
//				label.text(’OK!’).css(’color’,’green’);
//			}
//		});
//});