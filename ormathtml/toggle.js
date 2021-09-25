$(document).ready(function(){
	$('.content_toggle').click(function(){
		$('.content_block').slideToggle(800,"linear", function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle').html('+');
				$('.content_toggle').removeClass('open');
			} else {
				$('.content_toggle').html('-');
				$('.content_toggle').addClass('open');
			}							
		});
		return false;
	});
});
$(document).ready(function(){
	$('.content_toggle1').click(function(){
		$('.content_block1').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle1').html('+');
				$('.content_toggle1').removeClass('open');
			} else {
				$('.content_toggle1').html('-');
				$('.content_toggle1').addClass('open');
			}							
		});
		return false;
	});
});
$(document).ready(function(){
	$('.content_toggle2').click(function(){
		$('.content_block2').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle2').html('+');
				$('.content_toggle2').removeClass('open');
			} else {
				$('.content_toggle2').html('-');
				$('.content_toggle2').addClass('open');
			}							
		});
		return false;
	});
});

var img = $("#image"),
    a = img.parent('a');
$("#button").click('slow',function () {
    var str = (img.attr('src').search('open-menu') != -1) ? "close-menu" : "open-menu",
        src =  "./assets/"+str+".svg";
    img.attr({ src: src, alt: str });
    a.attr("href", src);
});

$(document).ready(function(){
	$('.menu-btn').click(function(){
		$('.menu-items').slideToggle(300);      
		return false;
	});
});