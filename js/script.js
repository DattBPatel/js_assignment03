// Dynamically add student ID and name
const myInfo = document.getElementById('myInfo');
myInfo.textContent = "My georgian student ID: 200552718 | My full name: Datt Bhaskarbhai Patel";

// Event listener for order button
document.getElementById('orderBtn').addEventListener('click', function() {
    // Get values from the form inputs
    const size = document.getElementById('size').value;
    const crust = document.querySelector('input[name="crust"]:checked').value;
    const base = document.querySelector('input[name="base"]:checked').value;
    const cheese = document.getElementById('cheese').value;
    // Get selected meat toppings using checkbox inputs
    const meatToppings = Array.from(document.querySelectorAll('input[name="meat_topping"]:checked')).map(checkbox => checkbox.value);
    // Get selected veggie toppings using checkbox inputs
    const veggieToppings = Array.from(document.querySelectorAll('input[name="veggie_topping"]:checked')).map(checkbox => checkbox.value);

    // Create PizzaMaker object
    const pizza = new PizzaMaker(size, crust, base, cheese, meatToppings, veggieToppings);

    // Output description
    const pizzaDescription = document.getElementById('pizzaDescription');
    pizzaDescription.innerHTML = `
        <p>Base: ${pizza.base}</p>
        <p>Size: ${pizza.size}</p>
        <p>Crust: ${pizza.crust}</p>
        <p>Cheese: ${pizza.cheese}</p>
        <p>Meat Toppings: ${pizza.meatToppings.join(', ')}</p>
        <p>Veggie Toppings: ${pizza.veggieToppings.join(', ')}</p>
    `;
});

// PizzaMaker class
class PizzaMaker {
    constructor(size, crust, base, cheese, meatToppings, veggieToppings) {
        this.size = size;
        this.crust = crust;
        this.base = base;
        this.cheese = cheese;
        this.meatToppings = meatToppings;
        this.veggieToppings = veggieToppings;
    }
}
