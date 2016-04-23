/**
 * caption width calicurator
*/
jQuery(document).ready(function(){
	$('.caption').each(function(i){
		var captionimg = $('.caption > .caption-img').eq(i).outerWidth();
		$('.caption').eq(i).css('max-width',captionimg);
	});
});