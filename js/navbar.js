$( document ).ready(function() {
  
var logo = $("#logo");
var mobile = 767;

function checkNavbar(){
    if ($(window).width() > mobile){
        logo.attr("src", "photos/newlogo.png");
    }else{
        logo.attr("src", "photos/mobileLogo.png");
    }
}
checkNavbar();

$(window).resize(function(){
    checkNavbar(); 
});
  
  
});
