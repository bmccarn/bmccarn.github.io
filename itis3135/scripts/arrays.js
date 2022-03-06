window.onload = function () {
    document.getElementById("add").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("employee_name").focus();
};

let person = [];
let salaries = [];

function addSalary() {
    let input = parseFloat(document.getElementById("salary").value);
    let name = document.getElementById("employee_name").value;

    if (input === "") 
    {
        alert("Invalid Entry - Please enter a number");
        enteredSalary = ""; 
        document.getElementById("employee_name").focus(); 
    }
    else 
    {
        
        input = parseFloat(input);
        
        person.push(name);
        salaries.push(input);
        document.getElementById("salary").value = "";
        document.getElementById("employee_name").focus();
    }
    
}

function displayResults() {
    let average = 0;
    let total = 0;
    let max = 0;
    let highestPaid = null;

    for (var i = 0; i < salaries.length; i++) {
        total += salaries[i];
    }

    average = (total / salaries.length);
    alert("The average is $" + average);

    
    for ( var i = 0; i < salaries.length; i++) {
        
        if (salaries[i] > max) {
            max = salaries[i]; 
            highestPaid = person[i]; 
        }
    }

    
    document.getElementById("results").innerHTML = "Average salary is $" + average + ". The highest salary is " + highestPaid + "'s, at $" + max;

}

function displaySalary() {
    let output = '<table class="center"<tr><td>Employee</td><td>Salary</td></tr>'

    for(var i = 0; i < salaries.length; i++)
    {
        output += "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>"
    }

    output += "</table>"

    document.getElementById("results_table").innerHTML = output;
}