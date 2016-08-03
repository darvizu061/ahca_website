$( document ).ready(function() {
  
var logo = $("#logo");
var mobile = 767;

function checkNavbar(){
    if ($(window).width() > mobile){
        logo.attr("src", "photos/logo.png");
    }else{
        logo.attr("src", "photos/logoMobile.png");
    }
}
checkNavbar();

$(window).resize(function(){
    checkNavbar(); 
});
  
  
});
