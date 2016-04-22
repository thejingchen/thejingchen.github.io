$(document).ready(function() {
  $("#first-row").hover(function(){
    $("#first-row img, svg").css("opacity", 0.5);
    $("#about").css("visibility","visible");
    $("#about").fadeIn(0);
  }, function() {
  	$("#first-row img, svg").css("opacity", 1);
  	$("#about").fadeOut(0);
  });

  $("#second-row").hover(function(){
    $("#second-row img").css("opacity", 0.5);
    $("#projects").css("visibility","visible");
    $("#projects").fadeIn(0);
  }, function() {
  	$("#second-row img").css("opacity", 1);
  	$("#projects").fadeOut(0);
  });

  $("#third-row").hover(function(){
    $("#third-row img").css("opacity", 0.5);
    $("#exploration").css("visibility","visible");
    $("#exploration").fadeIn(0);
  }, function() {
  	$("#third-row img").css("opacity", 1);
  	$("#exploration").fadeOut(0);
  });

  $("#top-bar span").hover(function(){
    $("#top-bar span").css("color", "#ff6666");
  }, function() {
  	$("#top-bar span").css("color", "black");
  });

});
