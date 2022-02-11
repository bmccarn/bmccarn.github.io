function scriptTest() {
    alert("Hey my script is running!");
}

function dateAndTime() {
    let date = new Date();
    let dayName = getDayName(date.getDay());
    let monthName = getMonthName(date.getMonth());
    let time = date.toLocaleTimeString();
    let year = date.getFullYear();
    let result = "Today is " + time + " on " + dayName + ", " + monthName + " " + year;
    document.getElementById("myH3").innerHTML = result;
}

function getDayName(day) {
    var array1 = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    return array1[day];
}

function getMonthName(month) {
    var array1 = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    return array1[month];
}

function welcomeMessage() {
    let name = document.getElementById("name");
    let feeling = document.getElementById("feeling");
    let message = "Welcome to my website, " + name + "! " + "I'm glad you're " + feeling + ". Feel free to look around!";
    document.getElementById("outputMessage").innerHTML = message;
}