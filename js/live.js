$(function(){

    // 팝업
    $(".btn").on("click",function(){
        $("#popup").fadeIn();
    });
    $(".close").on("click",function(){
        $("#popup").fadeOut();
    });
});