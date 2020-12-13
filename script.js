$(function(){


function pageTransit(finalPage){
$("#transit").fadeIn(200, function(){
var id=$(".current_page").attr("id");
var initid="#"+id;
$(initid).removeClass("current_page");
$(initid).addClass("hidden");
$(finalPage).removeClass("hidden");
$(finalPage).addClass("current_page");
$("#transit").delay(400).fadeOut(200);

});




}


$(".homebtn").click(function(){
if(!$("#ridwan_alawode").attr("class").includes("current_page")){
pageTransit("#ridwan_alawode");
$(".page_indicator").delay(300).css("background-color", "#ffffff00");
$("#ind1").delay(300).css("background-color", "#007de7");
}
});

$(".worksbtn").click(function(){
if(!$("#my_works").attr("class").includes("current_page")){
pageTransit("#my_works");
$(".page_indicator").delay(300).css("background-color", "#ffffff00");
$("#ind2").delay(300).css("background-color", "#007de7");
}
});

$(".aboutbtn").click(function(){
if(!$("#about_me").attr("class").includes("current_page")){
pageTransit("#about_me");
$(".page_indicator").delay(300).css("background-color", "#ffffff00");
$("#ind3").delay(300).css("background-color", "#007de7");
}
});

$(".contactbtn").click(function(){
if(!$("#contacts").attr("class").includes("current_page")){
pageTransit("#contacts");
$(".page_indicator").delay(300).css("background-color", "#ffffff00");
$("#ind4").delay(300).css("background-color", "#007de7");
}
});

$("#hire_pic").click(function(){

$("#cta").toggle(300);

});



});