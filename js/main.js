"use strict"
const divBody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit-button');

let roastSelection = document.querySelector('#roast-selection');

function roastSelect () {
    roastSelection.addEventListener("change", function(event){
        let roastSelected = event.target.value;
        console.log(roastSelected);
        switch (roastSelected) {
            case "light":
                roastSelection = "light";
                break;
            case "house":
                roastSelection = "house"
                break;
            case "bold":
                roastSelection = "bold"
                break;
        }
    });
}

const searchQuery = document.querySelector("#search")

searchQuery.addEventListener('keyup', function(e){
    let userInput = this.value.toLowerCase()
    let matchingCoffees = []
    for (let i = 0; i < coffees.length; i++) {
        if(coffees[i].name.toLowerCase().indexOf(userInput) !== -1){
            matchingCoffees.push(coffees[i])
        }
    }
    divBody.innerHTML = renderCoffees(matchingCoffees)
})


roastSelect();
console.log(roastSelection);

function renderCoffee(coffee) {
    let html = '<div class="cards">';
    html += '<h6>' + coffee.name + '</h6>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection;
    console.log(selectedRoast)
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}

let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'house'},
    {id: 5, name: 'American', roast: 'house'},
    {id: 6, name: 'Breakfast', roast: 'house'},
    {id: 7, name: 'High', roast: 'bold'},
    {id: 8, name: 'Continental', roast: 'bold'},
    {id: 9, name: 'New Orleans', roast: 'bold'},
    {id: 10, name: 'European', roast: 'bold'},
    {id: 11, name: 'Espresso', roast: 'bold'},
    {id: 12, name: 'Viennese', roast: 'bold'},
    {id: 13, name: 'Italian', roast: 'bold'},
    {id: 14, name: 'French', roast: 'bold'},
];

divBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
