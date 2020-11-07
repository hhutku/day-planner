// selecting the elements
var textArea = $('textArea');
var clearBtn = $('#clearBtn');
var currentDayEl = $("#currentDay");

// selecting event area
var eventArea9 = $('#input9');
var eventArea10 = $('#input10');
var eventArea11 = $('#input11');
var eventArea12 = $('#input12');
var eventArea1 = $('#input1');
var eventArea2 = $('#input2');
var eventArea3 = $('#input3');
var eventArea4 = $('#input4');
var eventArea5 = $('#input5');

// getting the data from local storage and displaying
eventArea9.text(localStorage.getItem("9A"));
eventArea10.text(localStorage.getItem("10A"));
eventArea11.text(localStorage.getItem("11A"));
eventArea12.text(localStorage.getItem("12A"));
eventArea1.text(localStorage.getItem("1P"));
eventArea2.text(localStorage.getItem("2P"));
eventArea3.text(localStorage.getItem("3P"));
eventArea4.text(localStorage.getItem("4P"));
eventArea5.text(localStorage.getItem("5P"));

// selecting button dynamically and storing data in local storage
$("button[type='submit']").on('click', function (e) {
    e.preventDefault();
    var btnClicked = $(e.target);

    if (e.target.nodeName == "BUTTON") {
        localStorage.setItem(e.target.dataset.set, btnClicked.prev().val());
    }
    else {
        localStorage.setItem(e.target.dataset.set, btnClicked.parent().prev().val());
    }
});

// Refreshing the planner
clearBtn.on('click', function (e) {
    e.preventDefault();
    localStorage.clear();
    location.reload();
});

// getting the time and displaying the day-planner
function display() {
    var today = moment();
    // displaying the Current Day, Month and Year
    currentDayEl.text(today.format("dddd, MMM Do, YYYY, h:mm:ss"));
    //getting the Hour value
    var currentHour = today.format("HH");
    // setting the colors of the event area
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
}
// trigerring the display function when the page initially loaded
display();

// renewing the moment() function to show the date and the colors correctly when time passes to another time interval.
setInterval(function () {
    display();
}, 1000);




