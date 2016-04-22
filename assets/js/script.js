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

  $("#first-row").click(function(){
    if (!$("#first-row").hasClass(".row-active")) {
      $("#first-row").addClass(".row-active");
      $("#second-row, #third-row").fadeOut(200);
      $("#top-bar").fadeOut(200);
      $("#description").fadeOut(200);
      setTimeout(function() {
        $("#return-to-home div").css("visibility","visible");
      }, 500);   
      $("#first-row").fadeOut(200).delay(200).fadeIn(500);
    }
  });

  $("#second-row").click(function(){
    if (!$("#second-row").hasClass(".row-active")) {
      $("#second-row").addClass(".row-active");
      $("#first-row, #third-row").fadeOut(200);
      $("#top-bar").fadeOut(200);
      $("#description").fadeOut(200);
      setTimeout(function() {
        $("#return-to-home div").css("visibility","visible");
      }, 500);   
      $("#second-row").fadeOut(200).delay(200).fadeIn(500);
    }
  });

  $("#third-row").click(function(){
    if (!$("#third-row").hasClass(".row-active")) {
      $("#third-row").addClass(".row-active");
      $("#second-row, #first-row").fadeOut(200);
      $("#top-bar").fadeOut(200);
      $("#description").fadeOut(200);
      setTimeout(function() {
        $("#return-to-home div").css("visibility","visible");
      }, 500);   
      $("#third-row").fadeOut(200).delay(200).fadeIn(500);
    }
  });

  $("#return-to-home").click(function(){
    if ($("#first-row").hasClass(".row-active")) {
      $("#first-row").removeClass(".row-active")
      $("#first-row").fadeOut(300);
      setTimeout(function() {
        $("#first-row, #second-row, #third-row").fadeIn(300);
        $("#top-bar").fadeIn(300);
        $("#description").fadeIn(300);
        $("#return-to-home div").css("visibility","hidden");
      }, 300);
    }
    else if ($("#second-row").hasClass(".row-active")) {
      $("#second-row").removeClass(".row-active")
      $("#second-row").fadeOut(300);
      setTimeout(function() {
        $("#first-row, #second-row, #third-row").fadeIn(300);
        $("#top-bar").fadeIn(300);
        $("#description").fadeIn(300);
        $("#return-to-home div").css("visibility","hidden");
      }, 300);
    }
    else if ($("#third-row").hasClass(".row-active")) {
      $("#third-row").removeClass(".row-active")
      $("#third-row").fadeOut(300);
      setTimeout(function() {
        $("#first-row, #second-row, #third-row").fadeIn(300);
        $("#top-bar").fadeIn(300);
        $("#description").fadeIn(300);
        $("#return-to-home div").css("visibility","hidden");
      }, 300);
    }
  });

});
