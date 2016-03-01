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

    $("#h1-1").click(function(){
        $("#h1-2").toggle();
    });
    $("#h1-2").click(function(){
        $("#h1-3").toggle();
    });
    $("#h1-3").click(function(){
        $("#h1-4").toggle();
    });
    $("#h1-4").click(function(){
        $("#h2-1").toggle();
    });
    $("#h2-1").click(function(){
        $("#h2-2").toggle();
    });
    $("#h2-2").click(function(){
        $("#h2-3").toggle();
    });
    $("#h2-3").click(function(){
        $("#h2-4").toggle();
    });
    $("#h2-4").click(function(){
        $("#h2-5").toggle();
    });
    $("#h2-5").click(function(){
        $("#h3-1").toggle();
    });
    $("#h3-1").click(function(){
        $("#h3-2").toggle();
    });
    $("#h3-2").click(function(){
        $("#h3-3").toggle();
    });
    $("#h3-3").click(function(){
        $("#h3-4").toggle();
    });
    $("#h3-4").click(function(){
        $("#h3-5").toggle();
    });
});