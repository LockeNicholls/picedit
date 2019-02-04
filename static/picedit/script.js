// edits the image according to the slider values
function editImage() {
	var saturate = $("#sat").val(); //saturation
	var blur = $("#blur").val(); //blur
	var gs = $("#gs").val(); //greyscale
	var bs = $("#bs").val(); //brightness
	var con = $("#con").val(); //contrast
	var inv = $("#inv").val(); //invert
	var sep = $("#sep").val(); //sepia
	var op = $("#op").val(); //opacity
	var hue = $("#hue").val(); //hue-rotate
	
	$("img").css('-webkit-filter','saturate('+saturate+'%) blur('+blur+'px) grayscale('+gs+'%) brightness('+bs+'%) contrast('+con+'%) sepia('+sep+'%) invert('+inv+'%) opacity('+op+'%) hue-rotate('+hue+'deg)')

}

//Change the image when sliders are moved
$("input[type=range]").change(editImage).mousemove(editImage);


//Reset when the button is pressed
$('#editor').on('reset', function () {
	setTimeout(function() {
		editImage();
	},0);
});