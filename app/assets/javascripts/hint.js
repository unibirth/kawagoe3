$(function(){
    $("#h1-5-2").css("display", "none");
    $("#h1-6-2").css("display", "none");
    $("#h2-5-2").css("display", "none");
    $("#h2-6-2").css("display", "none");
    $("#h3-1-2").css("display", "none");
    $("#h3-2-2").css("display", "none");
    $("#h3-3-2").css("display", "none");

    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var num4 = 0;
    var num5 = 0;
    var num6 = 0;
    var num7 = 0;

    $("#h1-5-1").click(function(){
      if (num1 == 0){
        $("#h1-5-2").toggle();
        num1 = 1;
      }
    });
    $("#h1-6-1").click(function(){
      if (num2 == 0){
        $("#h1-6-2").toggle();
        num2 = 1;
      }
    });
    $("#h2-5-1").click(function(){
      if (num3 == 0){
        $("#h2-5-2").toggle();
        num3 = 1;
      }
    });
    $("#h2-6-1").click(function(){
      if (num4 == 0){
        $("#h2-6-2").toggle();
        num4 = 1;
      }
    });
    $("#h3-1-1").click(function(){
      if (num5 == 0){
        $("#h3-1-2").toggle();
        num5 = 1;
      }
    });
    $("#h3-2-1").click(function(){
      if (num6 == 0){
        $("#h3-2-2").toggle();
        num6 = 1;
      }
    });
    $("#h3-3-1").click(function(){
      if (num7 == 0){
        $("#h3-3-2").toggle();
        num7 = 1;
      }
    });
});