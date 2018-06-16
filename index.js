$(document).ready(function(){
    $(".plein").click(function(){
        $(".object").addClass("background");
    });
});

$(document).ready(function(){
    $(".vide").click(function(){
        $(".object").removeClass("background");
    });
});

$(document).ready(function(){
    $(".circle").each(function(){
      $(this).click(function(){
        $(this).toggleClass("background");
    });
  });
});

$(document).ready(function(){
    $(".1").click(function(){
      $(".1, .a").toggleClass("background");
  });
});

$(document).ready(function(){
    $(".1").click(function(){
      if ($(".1").hasClass("background")) {
          $(".e").addClass("background");
        }
      if (!$(".1").hasClass("background")) {
          $(".e").removeClass("background");
       }
    });
 });

 $(document).ready(function(){
     $(".2").click(function(){
       $(".2, .b").toggleClass("background");
   });
 });

 $(document).ready(function(){
     $(".2").click(function(){
       if ($(".2").hasClass("background")) {
           $(".f").addClass("background");
         }
       if (!$(".2").hasClass("background")) {
           $(".f").removeClass("background");
        }
     });
  });

  $(document).ready(function(){
      $(".3").click(function(){
        $(".3, .c").toggleClass("background");
    });
  });

  $(document).ready(function(){
      $(".3").click(function(){
        if ($(".3").hasClass("background")) {
            $(".g").addClass("background");
          }
        if (!$(".3").hasClass("background")) {
            $(".g").removeClass("background");
         }
      });
   });

   $(document).ready(function(){
       $(".4").click(function(){
         $(".4, .d").toggleClass("background");
     });
   });

   $(document).ready(function(){
       $(".4").click(function(){
         if ($(".4").hasClass("background")) {
             $(".h").addClass("background");
           }
         if (!$(".4").hasClass("background")) {
             $(".h").removeClass("background");
          }
       });
    });

    $(document).ready(function(){
        $(".diamond").click(function(){
          $(".diamond, .o").toggleClass("background");
      });
    });

    $(document).ready(function(){
        $(".diamond").click(function(){
          if ($(".diamond").hasClass("background")) {
              $(".i").addClass("background");
            }
          if (!$(".diamond").hasClass("background")) {
              $(".i").removeClass("background");
           }
        });
     });
