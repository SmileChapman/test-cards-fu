
$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-black').fadeIn();
		return false;
	});
	 
	$('.popup-close').click(function() {
		$(this).parents('.popup-black').fadeOut();
		return false;
	});    
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-black').fadeOut();
		}
	});
	 
	$('.popup-black').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();                 
		}
	});
});

	function openPopup(name){
		$('.popup-black').fadeIn();
		$('.js-input-product').val(name);
	}