// var hourString = moment().format('H');
// var hour = parseInt(hourString);


var hourNow = 11;
function colorTasks() {
    console.log("hello");
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

function saveClicked() {
    window.alert("function changed");
}

function addOnClickHandlers() {
    for (var i = 0; i < 9; i++) {
        var selector = `#hour-${i} button`;
        console.log(selector);
        var element = document.querySelector(selector);
        element.onclick = saveClicked;   
    }   
}

function initialize() {
    colorTasks();
    addOnClickHandlers();
}



initialize();