// Variables
const form = document.getElementById('form').value;
const amount = document.getElementById('amount').value;
const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const email = document.getElementById('email').value;
// const address = document.getElementById('address').value;
// const zip = document.getElementById('zip').value;
// const city = document.getElementById('city').value;
// const state = document.getElementById('state').value;
// const country = document.getElementById('country').value;
const phone = document.getElementById('phone').value;
// const errorElement = document.getElementById('error').value;
// form.prepend(errorElement); // Put it at the top of the form

// Regular Expressions
const nameRegex = /^[a-zA-Z0-9]{2,12}$/; // 2-12 alphanumeric characters
const phoneRegex = /^[\+]?[0-9]{0,3}\W?+[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const zipRegex = new RegExp("^\\d{5}$"); // Matches exactly 5 digits
const amountRegex = /^[+]?([.]\d+|\d+[.]?\d*)$/;

// TODO: Setup event listener to pass through to the html that validates inputs

// Validation function
function validate(){
    let amountResult = amountRegex.test(amount);
    let firstNameResult = nameRegex.test(firstName);
    let lastNameResult = nameRegex.test(lastName);
    let emailResult = emailRegex.test(email);
    let phoneResult = phoneRegex.test(phone);

    alert("amount: " + amountResult + ", first name: " + firstNameResult + ", last name: " + lastNameResult + ", email: " + emailResult + ", phone: " + phoneResult);

    return false;
}