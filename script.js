var tasks = [];

// a function that sets the contents of our text areas based on what is stored in local storage. 
// Fills text areas with data unless no value was input by the user. 
function populateTextAreas() {
    var empty = ["","","","","","","","","",];
    var item = localStorage.getItem("tasks");
    if (item === null) {  
        tasks = empty;
    } else {
        tasks = JSON.parse(item);
    }    
    for (var i = 0; i < 9; i++) {
        var selector = `#hour-${i} .tasks`;
        var element = document.querySelector(selector);
        element.value = tasks[i];
    }
}

// a simple utility function that grabs an element by its id and sets it's contents
function setInnerHTML(id, value) {
    var element = document.getElementById(id);
    element.innerHTML = value;
}

// a function that uses moment.js to display the current date at 
// the top of the page.
function showCurrentDay() {
    var myString = moment().format("MMMM Do YYYY");
    setInnerHTML('currentDay', myString);
}

// a function that uses moment.js to set the color of the text area based on the
// time of day. 
var hourNow = moment().format('H');
var hour = parseInt(hourNow);
function colorTasks() {
    for (var i = 0; i < 9; i++) {
        var hour = i + 9;
        var backgroundColor = "";
        if (hour < hourNow) {
            backgroundColor = "gray";
        } else if (hour === hourNow) {
            backgroundColor = "red";
        } else {
            backgroundColor = "green";
        }

        var selector = `#hour-${i} .tasks`;
        var element = document.querySelector(selector);
        element.style.backgroundColor = backgroundColor;
    }
}

// a function that recognizes an event, targets a clicked button, goes into the
// dataset and pulls out the hour so that we know which button is clicked. 
function saveClicked(e) {
    var taskNumber = (e.target.dataset.hour);
    taskNumber = parseInt(taskNumber);
    var textAreaSelector = `#hour-${taskNumber} .tasks`;
    var textAreaElement = document.querySelector(textAreaSelector);
    var textAreaValue = textAreaElement.value;
    tasks[taskNumber] = textAreaValue;
    var j = JSON.stringify(tasks);
    localStorage.setItem("tasks", j);  
}

// a function that attaches a click handler to every button.
function addOnClickHandlers() {
    for (var i = 0; i < 9; i++) {
        var selector = `#hour-${i} button`;
        var element = document.querySelector(selector);
        element.onclick = saveClicked;   
    }   
}

// a function that calls/initializes several of our declared functions.
function initialize() {
    colorTasks();
    addOnClickHandlers();
    populateTextAreas();
    showCurrentDay();
}

initialize();