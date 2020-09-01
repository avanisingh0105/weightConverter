
var dropdown = document.getElementById('units');
var inputWeight = document.getElementById('weight');
var output = document.getElementById('outputbox');
var messageDisplay = document.querySelector("#message");

inputWeight.addEventListener('input', convertPounds);
dropdown.addEventListener('input', convertKg);


// default behaviour 
messageDisplay.textContent = "Enter weight in kilograms(kg)";
function convertPounds() {
    if(dropdown.value ==='kg') {
        let weight = inputWeight.value;

        weight = (weight*2.20462).toFixed(2)
        output.innerHTML = `${weight} pounds`
    }
    if (dropdown.value === 'pounds') {
        let weight = inputWeight.value;
        weight = (weight/2.20462).toFixed(2)
        output.innerHTML = `${(weight)} kilograms`
    }
}

// when drop down is toggled
function convertKg() {
    messageDisplay.textContent = "Enter weight in pounds(lb)";
    if (dropdown.value === 'pounds') {
        let weight = inputWeight.value;
        weight = (weight/2.20462).toFixed(2)
        output.innerHTML = `${(weight)} kilograms`
    }
    if(dropdown.value ==='kg') {
        let weight = inputWeight.value;
        weight = (weight*2.20462).toFixed(2)
        output.innerHTML = `${weight} pounds`
    }
}