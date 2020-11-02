var textArea = $('textArea');
var container = $('.container');
var clearBtn = $('#clearBtn');

var eventArea9 = $('#input9');
var eventArea10 = $('#input10');
var eventArea11 = $('#input11');
var eventArea12 = $('#input12');
var eventArea1 = $('#input1');
var eventArea2 = $('#input2');
var eventArea3 = $('#input3');
var eventArea4 = $('#input4');
var eventArea5 = $('#input5');



eventArea9.text(localStorage.getItem("9A"));
eventArea10.text(localStorage.getItem("10A"));
eventArea11.text(localStorage.getItem("11A"));
eventArea12.text(localStorage.getItem("12A"));
eventArea1.text(localStorage.getItem("1P"));
eventArea2.text(localStorage.getItem("2P"));
eventArea3.text(localStorage.getItem("3P"));
eventArea4.text(localStorage.getItem("4P"));
eventArea5.text(localStorage.getItem("5P"));


function handleEventText(e) {
    e.preventDefault();


    if (e.target.className.includes("fa-save")) {

        var btnClicked = $(e.target);

        localStorage.setItem(e.target.dataset.set, btnClicked.parent().prev().val());
        location.reload();
    }

}


$("button[type='submit']").on('click', handleEventText);

var today = moment();
var currentDayEl = $("#currentDay");

currentDayEl.text(today.format("dddd, MMM Do, YYYY"));


setInterval(function () {
    currentDayEl.text(today.format("dddd, MMM Do, YYYY"));
}, 1000);


var currentHour = today.format("HH");

for (i = 0; i < textArea.length; i++) {


    if (parseInt(textArea[i].dataset.set) > currentHour) {
        textArea[i].classList.add("future")
    }
    if (parseInt(textArea[i].dataset.set) == currentHour) {
        textArea[i].classList.add("present")
    }
    if (parseInt(textArea[i].dataset.set) < currentHour) {
        textArea[i].classList.add("past")
    }

}
clearBtn.on('click', clearEvents);


function clearEvents(e) {
    e.preventDefault();

    localStorage.clear();
    location.reload();
}


