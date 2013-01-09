// Lab 1 --makes tweets cycle

$(document).ready(function() {
	$('#status').cycle({ 
	  fx: 'shuffle', 
	 
	  speedIn: 3000,
	  speedOut: 3000,
	  timeout: 0,
	  next: '#status'
	});
});


// Lab 2 --