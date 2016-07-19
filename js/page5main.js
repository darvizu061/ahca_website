// DYNAMIC TAB FEATURE

//variables 
var upcomingBtn = $('#upcomingBtn');
var pastBtn = $('#pastBtn');
var upcomingRow = $('.upcomingRow');
var pastRow = $('.pastRow');
//declare functions 
function toggleBtn(button1, button2){
    if (!(button1.hasClass("activeBtn"))){
        button1.removeClass("deactiveBtn");
        button1.addClass("activeBtn");
        button2.removeClass('activeBtn');
        button2.addClass('deactiveBtn');
        
    } 
}

function toggleRow(row1, row2){
    if (row1.hasClass('deactiveRow')){
        row1.removeClass('deactiveRow');
        row2.addClass('deactiveRow');
    }
}

// listening event 
upcomingBtn.on('click', function(){
    toggleBtn(upcomingBtn, pastBtn);
    toggleRow(upcomingRow, pastRow);
});

pastBtn.on('click', function(){
    toggleBtn(pastBtn, upcomingBtn);
    toggleRow(pastRow, upcomingRow);
});

