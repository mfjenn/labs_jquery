/**
	css_styling solutions
*/

$(document).ready( function () {
	// Lab 1
	$('.meta').css('font-size', '0.8em');

	// Lab 2
	//$('.status:odd').css('background-color', '#efefef');

	// Lab 3
	$('.status:odd').addClass('zebra');

	// Lab 4a
	//$('.status').hover(
	//	function () {
	//		$(this).addClass('zebraOver');
	//	},
	//	function () {
	//		$(this).removeClass('zebraOver');
	//	}
	//);

	// Lab 4b
	$('.status').hover(
		function (e) {
			$(this).toggleClass('zebraOver');
		}
	);
});
