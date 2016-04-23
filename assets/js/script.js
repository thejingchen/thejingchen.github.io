$(document).ready(function() {
 $("#first-row").hover(function(){
    if(!$("#first-row").hasClass(".row-active")) {
      $("#first-row").css("cursor","pointer");
    }
    else {
      $("#first-row").css("cursor","default");
    }
    $("#first-row img, svg").css("opacity", 0.5);
    $("#about").css("visibility","visible");
    $("#about").fadeIn(0);
  }, function() {
    if(!$("#first-row").hasClass(".row-active")) {
  	 $("#first-row img, svg").css("opacity", 1);
  	 $("#about").fadeOut(0);
    }
  });

  $("#second-row").hover(function(){
    if(!$("#second-row").hasClass(".row-active")) {
      $("#second-row").css("cursor","pointer");
    }
    else {
      $("#second-row").css("cursor","default");
    }
    $("#second-row img").css("opacity", 0.5);
    $("#projects").css("visibility","visible");
    $("#projects").fadeIn(0);
  }, function() {
    if(!$("#second-row").hasClass(".row-active")) {
     $("#second-row img").css("opacity", 1);
     $("#projects").fadeOut(0);
    }
  });

$("#third-row").hover(function(){
    if(!$("#third-row").hasClass(".row-active")) {
      $("#third-row").css("cursor","pointer");
    }
    else {
      $("#third-row").css("cursor","default");
    }
    $("#third-row img").css("opacity", 0.5);
    $("#exploration").css("visibility","visible");
    $("#exploration").fadeIn(0);
  }, function() {
    if(!$("#third-row").hasClass(".row-active")) {
     $("#third-row img").css("opacity", 1);
     $("#exploration").fadeOut(0);
    }
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
      $("#icons").fadeOut(200);
      setTimeout(function() {
        $("#return-to-home div").css("visibility","visible");
      }, 500);   
      $("#first-row").fadeOut(200).delay(200).fadeIn(500);
      $("#about-container").delay(400).slideDown(500);
    }
  });

  $("#second-row").click(function(){
    if (!$("#second-row").hasClass(".row-active")) {
      $("#second-row").addClass(".row-active");
      $("#first-row, #third-row").fadeOut(200);
      $("#top-bar").fadeOut(200);
      $("#description").fadeOut(200);
      $("#icons").fadeOut(200);
      setTimeout(function() {
        $("#return-to-home div").css("visibility","visible");
      }, 500);   
      $("#second-row").fadeOut(200).delay(200).fadeIn(500);
      $("#projects-container").delay(400).slideDown(500);
    }
  });

  $("#third-row").click(function(){
    if (!$("#third-row").hasClass(".row-active")) {
      $("#third-row").addClass(".row-active");
      $("#second-row, #first-row").fadeOut(200);
      $("#top-bar").fadeOut(200);
      $("#description").fadeOut(200);
      $("#icons").fadeOut(200);
      setTimeout(function() {
        $("#return-to-home div").css("visibility","visible");
      }, 500);   
      $("#third-row").fadeOut(200).delay(200).fadeIn(500);
      $("#exploration-container").delay(400).slideDown(500);
    }
  });

  $("#return-to-home").hover(function(){
    $("#return-to-home").css("cursor","pointer");
  })

  $("#return-to-home").click(function(){
    if ($("#first-row").hasClass(".row-active")) {
      $("#first-row").removeClass(".row-active")
      $("#first-row").fadeOut(500);
      setTimeout(function() {
        $("#first-row, #second-row, #third-row").fadeIn(500);
        $("#top-bar").fadeIn(500);
        $("#description").fadeIn(500);
        $("#icons").fadeIn(500);
      }, 500);
        $("#return-to-home div").css("visibility","hidden");
        $("#about-container").slideUp(500);
        $("#first-row img, svg").css("opacity", 1);
        $("#about").fadeOut(0);
    }
    else if ($("#second-row").hasClass(".row-active")) {
      $("#second-row").removeClass(".row-active")
      $("#second-row").fadeOut(500);
      setTimeout(function() {
        $("#first-row, #second-row, #third-row").fadeIn(500);
        $("#top-bar").fadeIn(500);
        $("#description").fadeIn(500);
        $("#icons").fadeIn(500);
      }, 500);
        $("#return-to-home div").css("visibility","hidden");
        $("#projects-container").slideUp(500);
        $("#second-row img").css("opacity", 1);
        $("#projects").fadeOut(0);
    }
    else if ($("#third-row").hasClass(".row-active")) {
      $("#third-row").removeClass(".row-active")
      $("#third-row").fadeOut(500);
      setTimeout(function() {
        $("#first-row, #second-row, #third-row").fadeIn(500);
        $("#top-bar").fadeIn(500);
        $("#description").fadeIn(500);
        $("#icons").fadeIn(500);
        $("#third-row img").css("opacity", 1);
        $("#exploration").fadeOut(0);
      }, 500);
        $("#return-to-home div").css("visibility","hidden");
        $("#exploration-container").slideUp(500);
    }
  });

  $("#me130 .project-pic").hover(function() {
    $("#me130 .project-text p").fadeOut(200);
    $("#me130 .project-desc").fadeIn(200);
    }, function() {
    $("#me130 .project-text p").fadeIn(200);
    $("#me130 .project-desc").fadeOut(200);
  });

  $("#me110 .project-pic").hover(function() {
    $("#me110 .project-text p").fadeOut(200);
    $("#me110 .project-desc").fadeIn(200);
    }, function() {
    $("#me110 .project-text p").fadeIn(200);
    $("#me110 .project-desc").fadeOut(200);
  });

  $("#me122 .project-pic").hover(function() {
    $("#me122 .project-text p").fadeOut(200);
    $("#me122 .project-desc").fadeIn(200);
    }, function() {
    $("#me122 .project-text p").fadeIn(200);
    $("#me122 .project-desc").fadeOut(200);
  });

  $("#me107 .project-pic").hover(function() {
    $("#me107 .project-text p").fadeOut(200);
    $("#me107 .project-desc").fadeIn(200);
    }, function() {
    $("#me107 .project-text p").fadeIn(500);
    $("#me107 .project-desc").fadeOut(500);
  });

  $("#me102b .project-pic").hover(function() {
    $("#me102b .project-text p").fadeOut(500);
    $("#me102b .project-desc").fadeIn(500);
    }, function() {
    $("#me102b .project-text p").fadeIn(500);
    $("#me102b .project-desc").fadeOut(500);
  });

});
