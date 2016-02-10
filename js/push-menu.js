// Needs latest version of jQuery to run
 $(function(){
	 // shows buttons when js runs
	 $('body').removeClass('noscript');
	 
	 // Sets buttons to toggle data-state 
	 $('.toggle-btn, .close-btn').click(function(){
	 	toggleNav();
	});
 });
 
 function toggleNav() {
	 if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
	 // Display nab when closed
		$('.site-wrapper').attr('data-state', 'slide-open');
	 } else {
	// hide when nav is open
		$('.site-wrapper').attr('data-state', 'slide-closed');
	 }
 }