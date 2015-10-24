$(document).ready(function(){
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [];
	var imgs = $(".img-responsive.hvr-grow-shadow")
	
	$.each(imgs, function(index, val) {
		var obj = {};
		
		var $el = $(val);
		obj.src = $el.prop("src");
		obj.w = 750;
		obj.h = 550;
		items.push(obj);
		
		$el.click(function() {
			openGallery(index);
		});
	});
	
	var openGallery = function(index) {
		// define options (if needed)
		var options = {
		    // optionName: 'option value'
		    // for example:
		    index: index
		};

		// Initializes and opens PhotoSwipe
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};
});
