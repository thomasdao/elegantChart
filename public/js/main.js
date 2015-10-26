$(document).ready(function(){
	Parse.initialize("8UbLn5TLQJf4wjbU4hAQJjsw0KPktU1Sh4RrDoKf", "502XFoy8e2DmsUp1s1JcbWZG6SCck8DLtYkqrQzD");
	var Subscriber = Parse.Object.extend("Subscriber");

	// Allow subscribing to beta list
	$('#join').click(function() {
		console.log("Join click");
		var subscriber = new Subscriber();
		subscriber.set("name", $('#name').val());
		subscriber.set("email", $('#email').val());
		subscriber.save(null, {
			success: function(subscriber) {
				$('#signupForm').modal('hide');
			},

			error: function(subscriber, error) {
				$('#signupForm').modal('hide');
			}
		});
	});


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
