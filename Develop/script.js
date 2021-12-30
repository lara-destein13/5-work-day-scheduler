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

        // var id = `hour-${i}`;
        var selectors = `#hour-${i} .tasks`;
        var element = document.querySelector(selectors);
        // var element = document.getElementById(id);
        element.style.backgroundColor = backgroundColor;
    }
}


function initialize() {
    colorTasks();
}

initialize();