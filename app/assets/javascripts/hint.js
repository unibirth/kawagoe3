$(function(){
    $("#h1-6-2").css("display", "none");
    $("#h1-7-2").css("display", "none");
    $("#h2-5-2").css("display", "none");
    $("#h2-5-3").css("display", "none");
    $("#h2-5-4").css("display", "none");
    $("#h2-6-2").css("display", "none");
    $("#h3-2-2").css("display", "none");
    $("#h3-2-3").css("display", "none");
    $("#h3-2-4").css("display", "none");
    $("#h3-2-5").css("display", "none");
    $("#h3-3-2").css("display", "none");
    $("#h3-3-3").css("display", "none");
    $("#h3-4-2").css("display", "none");
    $("#h3-4-3").css("display", "none");

    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var num4 = 0;
    var num5 = 0;
    var num6 = 0;
    var num7 = 0;
    var num8 = 0;
    var num9 = 0;
    var num10 = 0;
    var num11 = 0;
    var num12 = 0;
    var num13 = 0;
    var num14 = 0;

    $("#h1-6-1").click(function(){
      if (num1 == 0){
        $("#h1-6-2").toggle();
        num1 = 1;
      }
    });
    $("#h1-7-1").click(function(){
      if (num2 == 0){
        $("#h1-7-2").toggle();
        num2 = 1;
      }
    });
    $("#h2-5-1").click(function(){
      if (num3 == 0){
        $("#h2-5-2").toggle();
        num3 = 1;
      }
    });
    $("#h2-5-2").click(function(){
      if (num4 == 0){
        $("#h2-5-3").toggle();
        num4 = 1;
      }
    });
    $("#h2-5-3").click(function(){
      if (num5 == 0){
        $("#h2-5-4").toggle();
        num5 = 1;
      }
    });
    $("#h2-6-1").click(function(){
      if (num6 == 0){
        $("#h2-6-2").toggle();
        num6 = 1;
      }
    });
    $("#h3-2-1").click(function(){
      if (num7 == 0){
        $("#h3-2-2").toggle();
        num7 = 1;
      }
    });
    $("#h3-2-2").click(function(){
      if (num8 == 0){
        $("#h3-2-3").toggle();
        num8 = 1;
      }
    });
    $("#h3-2-3").click(function(){
      if (num9 == 0){
        $("#h3-2-4").toggle();
        num9 = 1;
      }
    });
    $("#h3-2-4").click(function(){
      if (num10 == 0){
        $("#h3-2-5").toggle();
        num10 = 1;
      }
    });
    $("#h3-3-1").click(function(){
      if (num11 == 0){
        $("#h3-3-2").toggle();
        num11 = 1;
      }
    });
    $("#h3-3-2").click(function(){
      if (num12 == 0){
        $("#h3-3-3").toggle();
        num12 = 1;
      }
    });
    $("#h3-4-1").click(function(){
      if (num13 == 0){
        $("#h3-4-2").toggle();
        num13 = 1;
      }
    });
    $("#h3-4-2").click(function(){
      if (num14 == 0){
        $("#h3-4-3").toggle();
        num14 = 1;
      }
    });
});