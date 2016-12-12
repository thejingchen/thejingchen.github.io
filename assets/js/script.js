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
      $("#project-first-row").removeClass(".project-row-active");
      $("#project-first-row").fadeOut(500)
      $("#project-first-row img").css("opacity", 1);
      $("#dum-e").fadeOut(0);
      $("#project-second-row").removeClass(".project-row-active");
      $("#project-second-row").fadeOut(500)
      $("#project-second-row img").css("opacity", 1);
      $("#zest").fadeOut(0);
      $("#project-third-row").removeClass(".project-row-active");
      $("#project-third-row").fadeOut(500)
      $("#project-third-row img").css("opacity", 1);
      $("#mechatronic-hand").fadeOut(0);
      $("#project-fourth-row").removeClass(".project-row-active");
      $("#project-fourth-row").fadeOut(500)
      $("#project-fourth-row img").css("opacity", 1);
      $("#eargonomic").fadeOut(0);
      $("#project-fifth-row").removeClass(".project-row-active");
      $("#project-fifth-row").fadeOut(500)
      $("#project-fifth-row img").css("opacity", 1);
      $("#other").fadeOut(0);
      // $("#project-sixth-row").removeClass(".project-row-active");
      // $("#project-sixth-row").fadeOut(500)
      $("#project-fifth-row").css("margin-bottom","50px");
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
      }, 500);
      $("#dum-e-container").slideUp(500);
      $("#zest-container").slideUp(500);
      $("#mechatronic-hand-container").slideUp(500);
      $("#eargonomic-container").slideUp(500);
      $("#other-container").slideUp(500);
      // $("#mixer-container").slideUp(500);

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

  $("#project-first-row").hover(function(){
    if(!$("#project-first-row").hasClass(".project-row-active")) {
      $("#project-first-row").css("cursor","pointer");
    }
    // else {
    //   $("#project-first-row").css("cursor","default");
    // }
    $("#project-first-row img").css("opacity", 0.5);
    $("#dum-e").css("visibility","visible");
    $("#dum-e").fadeIn(0);
  }, function() {
    if(!$("#project-first-row").hasClass(".project-row-active")) {
     $("#project-first-row img").css("opacity", 1);
     $("#dum-e").fadeOut(0);
    }
  });

  $("#project-second-row").hover(function(){
    if(!$("#project-second-row").hasClass(".project-row-active")) {
      $("#project-second-row").css("cursor","pointer");
    }
    // else {
    //   $("#project-second-row").css("cursor","default");
    // }
    $("#project-second-row img").css("opacity", 0.5);
    $("#zest").css("visibility","visible");
    $("#zest").fadeIn(0);
  }, function() {
    if(!$("#project-second-row").hasClass(".project-row-active")) {
     $("#project-second-row img").css("opacity", 1);
     $("#zest").fadeOut(0);
    }
  });

$("#project-third-row").hover(function(){
    if(!$("#project-third-row").hasClass(".project-row-active")) {
      $("#project-third-row").css("cursor","pointer");
    }
    // else {
    //   $("#project-third-row").css("cursor","default");
    // }
    $("#project-third-row img").css("opacity", 0.5);
    $("#mechatronic-hand").css("visibility","visible");
    $("#mechatronic-hand").fadeIn(0);
  }, function() {
    if(!$("#project-third-row").hasClass(".project-row-active")) {
     $("#project-third-row img").css("opacity", 1);
     $("#mechatronic-hand").fadeOut(0);
    }
  });

$("#project-fourth-row").hover(function(){
    if(!$("#project-fourth-row").hasClass(".project-row-active")) {
      $("#project-fourth-row").css("cursor","pointer");
    }
    // else {
    //   $("#project-fourth-row").css("cursor","default");
    // }
    $("#project-fourth-row img").css("opacity", 0.5);
    $("#eargonomic").css("visibility","visible");
    $("#eargonomic").fadeIn(0);
  }, function() {
    if(!$("#project-fourth-row").hasClass(".project-row-active")) {
     $("#project-fourth-row img").css("opacity", 1);
     $("#eargonomic").fadeOut(0);
    }
  });

$("#project-fifth-row").hover(function(){
    if(!$("#project-fifth-row").hasClass(".project-row-active")) {
      $("#project-fifth-row").css("cursor","pointer");
    }
    // else {
    //   $("#project-fifth-row").css("cursor","default");
    // }
    $("#project-fifth-row img").css("opacity", 0.5);
    $("#other").css("visibility","visible");
    $("#other").fadeIn(0);
  }, function() {
    if(!$("#project-fifth-row").hasClass(".project-row-active")) {
     $("#project-fifth-row img").css("opacity", 1);
     $("#other").fadeOut(0);
    }
  });

// $("#project-sixth-row").hover(function(){
//     if(!$("#project-sixth-row").hasClass(".project-row-active")) {
//       $("#project-sixth-row").css("cursor","pointer");
//     }
//     else {
//       $("#project-sixth-row").css("cursor","default");
//     }
//     $("#project-sixth-row img").css("opacity", 0.5);
//     $("#mixer").css("visibility","visible");
//     $("#mixer").fadeIn(0);
//   }, function() {
//     if(!$("#project-sixth-row").hasClass(".project-row-active")) {
//      $("#project-sixth-row img").css("opacity", 1);
//      $("#mixer").fadeOut(0);
//     }
//   });

$("#project-first-row").click(function(){
    if (!$("#project-first-row").hasClass(".project-row-active")) {
      $("#project-first-row").addClass(".project-row-active");
      $("#project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeOut(200);
      $("#project-first-row").fadeOut(200).delay(200).fadeIn(500);
      $("#dum-e-container").delay(400).slideDown(500);
      $(window).scrollTop(0);
    }
    else {
      $("#project-first-row").removeClass(".project-row-active");
      $("#project-first-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
      }, 500);
      $("#dum-e-container").slideUp(500);
      $("#project-first-row img").css("opacity", 1);
      $("#dum-e").fadeOut(0);
    }
  });

$("#first-close").click(function(){
      $("#project-first-row").removeClass(".project-row-active");
      $("#project-first-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
      }, 500);
      $("#dum-e-container").slideUp(500);
      $("#project-first-row img").css("opacity", 1);
      $("#dum-e").fadeOut(0);
  });

  $("#project-second-row").click(function(){
    if (!$("#project-second-row").hasClass(".project-row-active")) {
      $("#project-second-row").addClass(".project-row-active");
      $("#project-first-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeOut(200);
      $("#project-second-row").fadeOut(200).delay(200).fadeIn(500);
      $("#zest-container").delay(400).slideDown(500);
      $(window).scrollTop(0);
    }
    else {
      $("#project-second-row").removeClass(".project-row-active");
      $("#project-second-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
      }, 500);
      $("#zest-container").slideUp(500);
      $("#project-second-row img").css("opacity", 1);
      $("#zest").fadeOut(0);
    }
  });

  $("#second-close").click(function(){
      $("#project-second-row").removeClass(".project-row-active");
      $("#project-second-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
      }, 500);
      $("#zest-container").slideUp(500);
      $("#project-second-row img").css("opacity", 1);
      $("#zest").fadeOut(0);
  });

  $("#project-third-row").click(function(){
    if (!$("#project-third-row").hasClass(".project-row-active")) {
      $("#project-third-row").addClass(".project-row-active");
      $("#project-second-row, #project-first-row, #project-fourth-row, #project-fifth-row").fadeOut(200);
      $("#project-third-row").fadeOut(200).delay(200).fadeIn(500);
      $("#mechatronic-hand-container").delay(400).slideDown(500);
      $(window).scrollTop(0);
    }
    else {
      $("#project-third-row").removeClass(".project-row-active");
      $("#project-third-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
      }, 500);
      $("#mechatronic-hand-container").slideUp(500);
      $("#project-third-row img").css("opacity", 1);
      $("#mechatronic-hand").fadeOut(0);
    }
  });

  $("#third-close").click(function(){
      $("#project-third-row").removeClass(".project-row-active");
      $("#project-third-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
      }, 500);
      $("#mechatronic-hand-container").slideUp(500);
      $("#project-third-row img").css("opacity", 1);
      $("#mechatronic-hand").fadeOut(0);
  });

    $("#project-fourth-row").click(function(){
      if (!$("#project-fourth-row").hasClass(".project-row-active")) {
        $("#project-fourth-row").addClass(".project-row-active");
        $("#project-first-row, #project-second-row, #project-third-row, #project-fifth-row").fadeOut(200);
        $("#project-fourth-row").fadeOut(200).delay(200).fadeIn(500);
        $("#eargonomic-container").delay(400).slideDown(500);
        $(window).scrollTop(0);
    }
    else {
      $("#project-fourth-row").removeClass(".project-row-active");
      $("#project-fourth-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
      }, 500);
      $("#eargonomic-container").slideUp(500);
      $("#project-fourth-row img").css("opacity", 1);
      $("#eargonomic").fadeOut(0);
    }
  });

  $("#fourth-close").click(function(){
      $("#project-fourth-row").removeClass(".project-row-active");
      $("#project-fourth-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
      }, 500);
      $("#eargonomic-container").slideUp(500);
      $("#project-fourth-row img").css("opacity", 1);
      $("#eargonomic").fadeOut(0);
  });

    $("#project-fifth-row").click(function(){
    if (!$("#project-fifth-row").hasClass(".project-row-active")) {
      $("#project-fifth-row").addClass(".project-row-active");
      $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row").fadeOut(200);
      $("#project-fifth-row").fadeOut(200).delay(200).fadeIn(500);
      $("#other-container").delay(400).slideDown(500);
      $(window).scrollTop(0);

      $("#project-fifth-row").css("margin-bottom","0");
    }
    else {
      $("#project-fifth-row").removeClass(".project-row-active");
      $("#project-fifth-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
        $("#project-fifth-row").css("margin-bottom","50px");
      }, 500);
      $("#other-container").slideUp(500);
      $("#project-fifth-row img").css("opacity", 1);
      $("#other").fadeOut(0);
    }
  });

  $("#fifth-close").click(function(){
      $("#project-fifth-row").removeClass(".project-row-active");
      $("#project-fifth-row").fadeOut(500)
      setTimeout(function() {
        $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeIn(500);
        $("#project-fifth-row").css("margin-bottom","50px");
      }, 500);
      $("#other-container").slideUp(500);
      $("#project-fifth-row img").css("opacity", 1);
      $("#other").fadeOut(0);
  });

  //   $("#project-sixth-row").click(function(){
  //   if (!$("#project-sixth-row").hasClass(".project-row-active")) {
  //     $("#sixth-row").addClass(".row-active");
  //     $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row").fadeOut(200);
  //     $("#project-sixth-row").fadeOut(200).delay(200).fadeIn(500);
  //     $("#mixer-container").delay(400).slideDown(500);

  //     $("#project-sixth-row").css("margin-bottom","0");
  //   }
  // });

  // $(".sixth-close").click(function(){
  //     $("#project-sixth-row").removeClass(".project-row-active");
  //     $("#project-sixth-row").fadeOut(500)
  //     setTimeout(function() {
  //       $("#project-first-row, #project-second-row, #project-third-row, #project-fourth-row, #project-fifth-row, #project-sixth-row").fadeIn(500);
  //       $("#project-sixth-row").css("margin-bottom","50px");
  //     }, 500);
  //     $("#mixer-container").slideUp(500);
  // });

  // $("#me130 .project-pic").hover(function() {
  //   $("#me130 .project-text p").fadeOut(200);
  //   $("#me130 .project-desc").fadeIn(200);
  //   }, function() {
  //   $("#me130 .project-text p").fadeIn(200);
  //   $("#me130 .project-desc").fadeOut(200);
  // });

  // $("#me110 .project-pic").hover(function() {
  //   $("#me110 .project-text p").fadeOut(200);
  //   $("#me110 .project-desc").fadeIn(200);
  //   }, function() {
  //   $("#me110 .project-text p").fadeIn(200);
  //   $("#me110 .project-desc").fadeOut(200);
  // });

  // $("#me122 .project-pic").hover(function() {
  //   $("#me122 .project-text p").fadeOut(200);
  //   $("#me122 .project-desc").fadeIn(200);
  //   }, function() {
  //   $("#me122 .project-text p").fadeIn(200);
  //   $("#me122 .project-desc").fadeOut(200);
  // });

  // $("#me107 .project-pic").hover(function() {
  //   $("#me107 .project-text p").fadeOut(200);
  //   $("#me107 .project-desc").fadeIn(200);
  //   }, function() {
  //   $("#me107 .project-text p").fadeIn(200);
  //   $("#me107 .project-desc").fadeOut(200);
  // });

  // $("#me102b .project-pic").hover(function() {
  //   $("#me102b .project-text p").fadeOut(200);
  //   $("#me102b .project-desc").fadeIn(200);
  //   }, function() {
  //   $("#me102b .project-text p").fadeIn(200);
  //   $("#me102b .project-desc").fadeOut(200);
  // });

});
