function add() 
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1+num2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function subtract() 
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1-num2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function multiply() 
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1*num2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}

function divide() 
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1/num2;
    document.getElementById("result").innerHTML = "The answer is: " + result;
}