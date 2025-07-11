// Validation function
function validate(event){
    event.preventDefault(); // Prevent form submission to handle validation first

    // Form value variables
    const form = document.getElementById('form').value;
    const amount = document.getElementById('amount').value;
    const card = document.getElementById('card').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const phone = document.getElementById('phone').value;
    const agreeTerms = document.getElementById('agree-terms').checked;

    // Regular expression variables
    const amountRegex = /^[+]?([0-9]+(?:[\.][0-9]{1,2})?|\.[0-9]{1,2})$/; 
    const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;
    const nameRegex = /^[a-zA-Z]{2,12}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const addressRegex = /^[\w\s,.'-]{3,100}$/;
    const cityRegex = /^[a-zA-Z\s'-]{2,100}$/;
    const zipRegex = /^\d{5}(-\d{4})?$/;
    const phoneRegex = /^(?:\(\d{3}\)[\s\-\.]?|\d{3}[\s\-\.]?)\d{3}[\s\-\.]?\d{4}$/;

    // Validation result variables
    let valid = true;
    let errors = [];    // Array for all the error messages

    // Validate fields
    if (!amountRegex.test(amount)) {
        valid = false;
        errors.push('Please enter a valid amount (e.g., 10.50)');
    }

    if (!cardRegex.test(card)) {
        valid = false;
        errors.push('Please enter a valid card (Visa, Mastercard, American Express and Discover)');
    }

    if (!nameRegex.test(firstName)) {
        valid = false;
        errors.push('First name must be between 2 and 12 alphabetic characters.');
    }

    if (!nameRegex.test(lastName)) {
        valid = false;
        errors.push('Last name must be between 2 and 12 alphabetic characters.');
    }

    if (!emailRegex.test(email)) {
        valid = false;
        errors.push('Please enter a valid email address.');
    }

    if (!addressRegex.test(address)) {
        valid = false;
        errors.push('Please enter a valid address.');
    }

    if (!cityRegex.test(city)) {
        valid = false;
        errors.push('Please enter a valid city.');
    }

    if (!state) {
        valid = false;
        errors.push('Please select a valid state.');
    }

    if (!zipRegex.test(zip)) {
        valid = false;
        errors.push('Please enter a valid ZIP code.');
    }

    if (!phoneRegex.test(phone)) {
        valid = false;
        errors.push('Please enter a valid phone number.');
    }

    if (!agreeTerms) {
        valid = false;
        errors.push('You must agree to the terms and conditions.');
    }

    // Display errors
    const errorMessages = document.getElementById('donation--error');
    errorMessages.innerHTML = ''; // Clear any previous messages
    if (!valid) {
        errors.forEach((error) => {
            const errorElement = document.createElement('div');
            errorElement.classList.add('error');
            errorElement.textContent = error;
            errorMessages.appendChild(errorElement);
        });
    }

    if (valid) { alert('Form submitted successfully'); }
}