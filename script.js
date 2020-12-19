$(function(){
$('.loader-img').animate({opacity:0}, 500, function(){
$('.loader-img').animate({opacity:1}, 500, function(){
$('.loader-img').animate({opacity:0}, 500, function(){
$('.loader-img').animate({opacity:1}, 500, function(){
$('.loader-img').animate({opacity:0}, 500, function(){
$('.loader-img').animate({opacity:1}, 500);
});
});
});
});
});





$('.loading-graphics').delay(3000).fadeOut(500);
$(".homebtn").click(function(){
$(".page_indicator").delay(300).css("background-color", "#ffffff00");
$("#ind1").delay(300).css("background-color", "#007de7");
});

$(".worksbtn").click(function(){
$(".page_indicator").delay(300).css("background-color", "#ffffff00");
$("#ind2").delay(300).css("background-color", "#007de7");
});

$(".aboutbtn").click(function(){
$(".page_indicator").delay(300).css("background-color", "#ffffff00");
$("#ind3").delay(300).css("background-color", "#007de7");
});

$(".contactbtn").click(function(){
$(".page_indicator").delay(300).css("background-color", "#ffffff00");
$("#ind4").delay(300).css("background-color", "#007de7");
});

$("#hire_pic").click(function(){

$("#cta").toggle(300);

});



});