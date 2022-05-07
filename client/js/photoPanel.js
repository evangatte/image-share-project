
// $('#photoDropdown li').click(function() {
// 	$('#previewImage').attr('src', `/${$(this).text()})`;
// })

const $previewImage = $('#previewImage');

$('#photoDropdown li').hover(
	function() {
	$previewImage.attr('src', `/${$(this).text()}`);
},
	function () {
		$previewImage.attr('src', '')
	}
)
