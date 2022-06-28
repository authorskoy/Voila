$(document).ready(function () {

	$(function () {
		$('a[href*=#]').on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 300, 'linear');
		});
	});

	$(".small_menu").click(function () {
		if ($(this).parent().children("ul").is(":visible")) {
			$(this).parent().children("ul").slideUp();
		} else {
			$(this).parent().children("ul").slideDown();
		}
	});




	$(".fancybox").fancybox();





	$("a.scroll").click(function () {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});




	$("#callback").submit(function () {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

