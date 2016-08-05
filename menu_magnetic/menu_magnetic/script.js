$(function(){

    $(".hamburger").click(function(){
        if(!$(".caret").hasClass("active-hidden")){
            $(".content-container").addClass("lightgray");
        }

        $(".caret").each(function(){
            if($(this).hasClass("active-hidden")){
                $(this).removeClass("active-hidden")
                    .addClass("active")
                    .removeClass("hidden");
            }
        });

        if(window.innerWidth > 640){
            $(".nav-container").css("left", "-250px")
                .show()
                .animate({
                    left: "0px"
                }, 200);
        } else {
            $(".nav-container").css("top", "-240px")
                .show()
                .animate({
                    top: "0px"
                }, 200);
        }
    });

    $(".close-btn").click(function(){
       $(".caret").each(function(){
           if($(this).hasClass("active")){
               $(this).removeClass("active")
                   .addClass("active-hidden")
                   .addClass("hidden");
           }
       });

       $(".content-container").addClass("gray").removeClass("lightgray");

        if(window.innerWidth > 640){
            $(".nav-container").animate({
                left: "-250px"
            }, 200)
        } else {
            $(".nav-container").animate({
                top: "-240px"
            }, 200);
        }

    });

    $("li").click(function(){
        $(".content-container").addClass("gray").removeClass("lightgray");
        $("li").each(function(){
            if($(this).hasClass("dark-blue")){
                $(this).removeClass("dark-blue").find(".caret").removeClass("active");
            }
        });

        $(".caret").addClass("hidden");
        $(this).find("span").removeClass("hidden").addClass("active");
        $(this).addClass("dark-blue");

        if(window.innerWidth < 641){
            $(".nav-container").animate({
                top: "-240px"
            }, 200);
        }
    });

});