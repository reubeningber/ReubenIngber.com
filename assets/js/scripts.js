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
  // $('.accordion-tabs').each(function() {
  //   $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  // });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      window.location.replace($('[data-page-name]');
    } else {
      event.preventDefault();
    }
  });
});
