function scriptTest() {
    alert("Hey my script is running!");
}

function dateAndTime() {
    let date = new Date();
    let dayName = getDayName(date.getDay());
    let dayNumber = date.getDate();
    let monthName = getMonthName(date.getMonth());
    let year = date.getFullYear();
    let time = date.toLocaleTimeString();
    let stringTime = "Today is " + time + " on " + dayName + ", " + dayNumber + " " + monthName + ", " + year;
    var intervalId = window.setInterval(function () {
        dateAndTime();
    }, 1000);
    document.getElementById("dateOutput").innerHTML = stringTime;
}

function getMonthName(month) {
    var arr1 = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    return arr1[month];
}

function getDayName(day) {
    var arr2 = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    return arr2[day];
}

function welcomeMessage() {
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let message = "Welcome to my website, " + name + "! " + "I'm glad you're " + feeling + ". Feel free to look around!";
    document.getElementById("outputMessage").innerHTML = message;
}

function quoteGenerator() {
    let quotes =
        [
            '"When you have a dream, you’ve got to grab it and never let go." -Carol Burnett',
            '"There is nothing impossible to they who will try." — Alexander the Great',
            '"The bad news is time flies. The good news is you’re the pilot." — Michael Altshuler',
            '"Keep your face always toward the sunshine, and shadows will fall behind you." — Walt Whitman',
            '"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you." — Ralph Waldo Emerson',
            '"Belief creates the actual fact." — William James',
            '"It is during our darkest moments that we must focus to see the light." — Aristotle',
            '"Believe you can and you’re halfway there." – Theodore Roosevelt',
            '"In a gentle way, you can shake the world." — Mahatma Gandhi',
            '"Learning how to be still, to really be still and let life happen—that stillness becomes a radiance.” — Morgan Freeman'
        ]

    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteOutput").innerHTML = quotes[randomNumber];
}

function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = +num1 + +num2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1 - num2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1 * num2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1 / num2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}