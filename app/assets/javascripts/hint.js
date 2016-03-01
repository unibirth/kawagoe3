$(function(){
    $("#h1-2").css("display", "none");
    $("#h1-3").css("display", "none");
    $("#h1-4").css("display", "none");
    $("#h2-1").css("display", "none");
    $("#h2-2").css("display", "none");
    $("#h2-3").css("display", "none");
    $("#h2-4").css("display", "none");
    $("#h2-5").css("display", "none");
    $("#h3-1").css("display", "none");
    $("#h3-2").css("display", "none");
    $("#h3-3").css("display", "none");
    $("#h3-4").css("display", "none");
    $("#h3-5").css("display", "none");

    var num = 0;

    $("#h1-1").click(function(){
      if (num == 0){
        $("#h1-2").toggle();
        num = 1;
      }
    });
    $("#h1-2").click(function(){
      if (num == 1){
        $("#h1-3").toggle();
        num = 2;
      }
    });
    $("#h1-3").click(function(){
      if (num == 2){
        $("#h1-4").toggle();
        num = 3;
      }
    });
    $("#h1-4").click(function(){
      if (num == 3){
        $("#h2-1").toggle();
        num = 4;
      }
    });
    $("#h2-1").click(function(){
      if (num == 4){
        $("#h2-2").toggle();
        num = 5;
      }
    });
    $("#h2-2").click(function(){
      if (num == 5){
        $("#h2-3").toggle();
        num = 6;
      }
    });
    $("#h2-3").click(function(){
      if (num == 6){
        $("#h2-4").toggle();
         num = 7;
      }
    });
    $("#h2-4").click(function(){
      if (num == 7){
        $("#h2-5").toggle();
         num = 8;
      }
    });
    $("#h2-5").click(function(){
      if (num == 8){
        $("#h3-1").toggle();
         num = 9;
      }
    });
    $("#h3-1").click(function(){
      if (num == 9){
        $("#h3-2").toggle();
         num = 10;
      }
    });
    $("#h3-2").click(function(){
      if (num == 10){
        $("#h3-3").toggle();
         num = 11;
      }
    });
    $("#h3-3").click(function(){
      if (num == 11){
        $("#h3-4").toggle();
         num = 12;
      }
    });
    $("#h3-4").click(function(){
      if (num == 12){
        $("#h3-5").toggle();
         num = 13;
      }
    });
});