$(function(){
var slidePortHeight = $(".photo-slide").height();
var slidePortWidth = $(".photo-slide").width();

//Sets width and height of photoslides
$(".photo-item").width(slidePortWidth);
$(".photo-item").height(slidePortHeight);

//Get all images and assign to arrray
var img=$(".photo-item > img");

//Iterates through  
for(i=0; i < img.length; i++){
if(img[i].naturalHeight>img[i].naturalWidth){

$(img[i]).css({"height":"100%","display":"block", "margin-right":"auto", "margin-left":"auto"});


}else{
$(img[i]).css({"width":"100%", "display":"inline-block"});
$(img[i]).parent().css("line-height", slidePortHeight+ "px" );
}
}

$(".btn_prev").click(function(){
  var slide = $(this).siblings().eq(0);
  if($(slide).children(".active").prev().length){
  var current = $(slide).children(".active");
  $(current).removeClass("active");
 $(current).prev().addClass("active");
    $(slide).animate({left:"+=" + slidePortWidth}, 500 );}
});

$(".btn_next").click(function(){
var slide = $(this).siblings().eq(0);
if($(slide).children(".active").next().length){
var current = $(slide).children(".active");
$(current).removeClass("active");
$(current).next().addClass("active");
$(slide).animate({left:"-=" + slidePortWidth}, 500 );}
});


});