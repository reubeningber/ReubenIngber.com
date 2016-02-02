// $(document).ready(function() {	
// 	var $container = $('#project-container').masonry();
// 	// layout Masonry again after all images have loaded
// 	$container.imagesLoaded( function() {
// 		$container.addClass('animated fadeIn');
// 		$container.masonry({
// 			gutter: 10,
// 			itemSelector: '.project-item'
// 		});
// 	});

// 	$('.popup-link').magnificPopup({
// 		type: 'inline',
// 		closeOnContentClick: true,
// 		mainClass: 'mfp-img-mobile',
// 		// image: {
// 		// 	verticalFit: true
// 		// },
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 	});
// });

$(document).ready(function () {
  
  	/*-------------------------------------------- */
	/** Instagram */
	/*-------------------------------------------- */
	var feed = new Instafeed({
	    get: 'user',
        userId: '1920699',
	    clientId: '4bbfbc0356b24be5bb42f8bebcf178a9',
	    template: '<li class="instgram-feed__item"><a href="{{link}}"><img src="{{image}}" /></a></li>',
	    limit: 5
	});
	feed.run();

	/*-------------------------------------------- */
	/** Twitter */
	/*-------------------------------------------- */

	var twitterConfig = {
		"id": '694661085845151744',
		"domId": 'tw-widget',
		"maxTweets": 8,
		"enableLinks": true,
		"showImages": false,
		"showUser": false,
		"showInteraction": true
	};

	twitterFetcher.fetch(twitterConfig);
});
