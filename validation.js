$(document).ready(function() {
	$('#signup form').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			url: {
				url: true
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
			label.text('OK!').css('color','green');
		}
	});
});