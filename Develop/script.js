function initialize() {
    console.log("hello");
    for (var i = 0; i < 9; i++) {
        var id = `hour-${i}`;
        var element = document.getElementById(id);
        element.style.backgroundColor = "green";
    }
}

initialize();