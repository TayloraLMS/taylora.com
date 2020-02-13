$(function() {
    if ($.browser.mobile) {
	$(".checkmobile").addClass("mobile");
    } else {
	$(".checkmobile").removeClass("mobile");
    }
});
