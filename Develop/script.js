// var hourString = moment().format('H');
// var hour = parseInt(hourString);

var tasks = [];

function populateTextAreas() {
    var empty = ["","","","","","","","","",];
    var item = localStorage.getItem("tasks");
    if (item === null) {
        window.alert("got item");    
        tasks = empty;
    } else {
        window.alert("got something");
        tasks = JSON.parse(item);
    }    
    for (var i = 0; i < 9; i++) {
        var selector = `#hour-${i} .tasks`;
        console.log(selector);
        var element = document.querySelector(selector);
        element.value = tasks[i];
    }
}

var hourNow = 11;
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

function saveClicked(e) {
    // window.alert(e.target.dataset.hour);
    var taskNumber = (e.target.dataset.hour);
    taskNumber = parseInt(taskNumber);
    window.alert(taskNumber);

    var textAreaSelector = `#hour-${taskNumber} .tasks`;
    window.alert(textAreaSelector);
    var textAreaElement = document.querySelector(textAreaSelector);
    var textAreaValue = textAreaElement.value;
    window.alert(textAreaValue);
}


function addOnClickHandlers() {
    for (var i = 0; i < 9; i++) {
        var selector = `#hour-${i} button`;
        var element = document.querySelector(selector);
        element.onclick = saveClicked;   
    }   
}

function initialize() {
    colorTasks();
    addOnClickHandlers();
    populateTextAreas();
}



initialize();