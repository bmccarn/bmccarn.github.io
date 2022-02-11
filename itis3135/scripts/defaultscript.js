function scriptTest() {
    alert("Hey my script is running!");
}

function welcomeMessage() {
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let message = "Welcome to my website, " + name + "! " + "I'm glad you're " + feeling + ". Feel free to look around!";
    document.getElementById("outputMessage").innerHTML = message;
}