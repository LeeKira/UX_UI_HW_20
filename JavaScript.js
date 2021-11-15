$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "2%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "20%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "40%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "60%");
	$(".testing").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "80%");
	$(".iterations").addClass("active").siblings().removeClass("active");
});
$(".step06").click( function() {
	$("#line-progress").css("width", "100%");
	$(".reflection").addClass("active").siblings().removeClass("active");
});

