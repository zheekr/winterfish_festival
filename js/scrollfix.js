$(document).ready(function(){
    
    var headerResize = $("#banner").data("header-resize");

if (headerResize == 1) {
  $(window).bind("scroll", toggleNavClass);
}

function toggleNavClass() {
  var scrollTop = $(window).scrollTop();
  var windowWidth = $(window).width();
  $("#banner").toggleClass("smallbar", scrollTop > 100);
}
}) 
/* scrollTop이 100이상일 때 즉, 스크롤 100이상 내리면 smallbar라는 클래스를 #banner에 추가하라는 의미 */