function userInput() {
    let numSides = parseFloat(prompt("The Bronze Meerkat would like you to enter a number 1-10 in order to see the corresponding polygon!"));
    return numSides;
}

function polygonCalculator(numSides) {

   // let polygon = null;

    let roundedSides = Math.round(Math.abs(numSides));

    switch (roundedSides) {
        case 1:
            polygon = "This is called a monogon!";
            break;
        
        case 2:
            polygon = "This is called a bigon!";
            break;

        case 3:
            polygon = "This is called a triangle!";
            break;

        case 4:
            polygon = "This is called a quadrilateral!";
            break;

        case 5:
            polygon = "This is called a pentagon!";
            break;

        case 6:
            polygon = "This is called a hexagon!";
            break;

        case 7:
            polygon = "This is called a septagon!";
            break;

        case 8:
            polygon = "This is called a octagon!";
            break;

        case 9:
            polygon = "This is called a nonagon!";
            break;

        case 10:
            polygon = "This is called a decagon!";
            break;

        default:
            "Input Error: Please enter a number 1-10.";
            userInput();
            break;
    }

    return polygon;
}