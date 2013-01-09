
$(function() {
$('#toggleButton').click( function() {
  $('#header').toggle('5000');
  $('#footer').toggle('5000', function(){
	if ($('#header').is(':visible')) {
	 $('#toggleButton').val('Hide') 
	} else {
		$('#toggleButton').val('Show') 
	  }
    });
  });
});
