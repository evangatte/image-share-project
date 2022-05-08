const $rowOneImageOneInput = $('#rowOneImageOneInput');
const $rowOneImageTwoInput = $('#rowOneImageTwoInput');
const $rowOneImageThreeInput = $('#rowOneImageThreeInput');
const $rowTwoImageOneInput = $('#rowTwoImageOneInput');
const $rowTwoImageTwoInput = $('#rowTwoImageTwoInput');
const $rowTwoImageThreeInput = $('#rowTwoImageThreeInput');


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


$('#happyBtn').click(function() {
	$rowOneImageOneInput.val($('#rowOneImageOne').attr('src'))	
})

$('#submitGridBtn').click(function() {
	$rowOneImageOneInput.val($('#rowOneImageOne').attr('src'))
	$rowOneImageTwoInput.val($('#rowOneImageTwo').attr('src'))
	$rowOneImageThreeInput.val($('#rowOneImageThree').attr('src'))
	$rowTwoImageOneInput.val($('#rowTwoImageOne').attr('src'))
	$rowTwoImageTwoInput.val($('#rowTwoImageTwo').attr('src'))
	$rowTwoImageThreeInput.val($('#rowTwoImageThree').attr('src'))
})















