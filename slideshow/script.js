$(document).ready(function(){

    var counter = 1;

    var showPhoto = function(){
        $(".slideshow").css({
            backgroundImage: "url(images/" + counter + ".jpg)"
        });
    };

    $(".next").on("click", function(){
        if(counter === 5){
            return false;
        }
        counter++;
        showPhoto();
    });

    $(".prev").on("click", function(){
        if(counter === 1){
            return false;
        }
        counter--;
        showPhoto();
    });

});