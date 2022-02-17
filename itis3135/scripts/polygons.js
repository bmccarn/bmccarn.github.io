window.onload = polygonCalculator();


function polygonCalculator() {
    //Take the user input
    let userInput = parseFloat(prompt("The Bronze Meerkat would like you to enter a number 1-10 in order to see the corresponding polygon!"));
    //Round it up and take the absolute value
    let numSides = Math.round(Math.abs(userInput));

    //Plug the number into a switch statement in order to alert the corresponding polygon
    switch (numSides) {
        case 1:
            alert("This is called a monogon!");
            break;

        case 2:
            alert("This is called a bigon!");
            break;

        case 3:
            alert("This is called a triangle!");
            break;

        case 4:
            alert("This is called a quadrilateral!");
            break;

        case 5:
            alert("This is called a pentagon!");
            break;

        case 6:
            alert("This is called a hexagon!");
            break;

        case 7:
            alert("This is called a septagon!");
            break;

        case 8:
            alert("This is called an octagon!");
            break;

        case 9:
            alert("This is called a nonagon!");
            break;

        case 10:
            alert("This is called a decagon!");
            break;

        default:
            //If it's invalid input, present an error message and run the function again
            alert("Input Error: Please enter a number 1-10.");
            polygonCalculator();
            break;
    }
}
