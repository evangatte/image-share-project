//preview image
const $previewImage = $('#previewImage');
$('#photoDropdown li').hover(
	function() {
	$previewImage.attr('src', `/${$(this).text()}`);
})
$('#photoDropdown li').click(function() {
	$previewImage.attr('src', `/${$(this).text()}`);	
}) 




$(document).on('click', function(evt) {
	if ($(evt.target).hasClass('rowImage')) {
		$('.previewRow > div').css('border-color', 'black')
		$('.previewRow > div').removeClass('selected')
		$(evt.target).css('border-color', 'red');
		$(evt.target).addClass('selected');
		
	}  else if ($(evt.target).parent().hasClass('rowImage')) {
		$('.previewRow > div').css('border-color', 'black')
		$('.previewRow > div').removeClass('selected')
		$(evt.target).parent().css('border-color', 'red');
		$(evt.target).parent().addClass('selected')
	}
});	



$('#addToGridBtn').click(function() {
	const $gridSquare = $('.selected > img')	
	const previewImageSrc = $previewImage.attr('src');
	console.log(previewImageSrc)
	
	$gridSquare.attr('src', `${previewImageSrc}`);
})













