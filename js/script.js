// Validation function
function validate(event){
    // Prevent form submission to handle validation first
    event.preventDefault(); 

    // Clears up previous error messages
    // For each div in the loop, set text content to null
    document.querySelectorAll('.donation--error').forEach(div => div.textContent = '');

    // Form value variables
    const form = document.getElementById('form');
    const amount = document.getElementById('amount');
    const card = document.getElementById('card');
    const expiration = document.getElementById('expiration');
    const cvc = document.getElementById('cvc');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zip = document.getElementById('zip');
    const phone = document.getElementById('phone');
    const agreeTerms = document.getElementById('agree-terms');

    // Regular expression variables
    const amountRegex = /^(?!0*(?:\.0{1,2})?$)(?:\d+|\.\d{1,2}|\d+\.\d{1,2})$/; 
    const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;
    const expirationRegex = /^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/;
    const cvcRegex = /^[0-9]{3,4}$/;
    const nameRegex = /^[a-zA-Z]{2,12}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const addressRegex = /^[\w\s,.'-]{3,100}$/;
    const cityRegex = /^[a-zA-Z\s'-]{2,100}$/;
    const zipRegex = /^\d{5}(-\d{4})?$/;
    const phoneRegex = /^(?:\(\d{3}\)[\s\-\.]?|\d{3}[\s\-\.]?)\d{3}[\s\-\.]?\d{4}$/;

    // Validation result variables
    let valid = true;

    // Validate fields
    if (!amountRegex.test(amount.value) || parseFloat(amount.value) <= 0) {     //parseFloat converts string to float
        valid = false;
        showError('amount', 'Please enter a valid amount (e.g., 10.99)');
        amount.classList.remove('input-valid');     //removes green/valid css styling
        amount.classList.add('input-invalid');      //adds red/invalid css styling
    } else {
        amount.classList.remove('input-invalid');   //removes red/invalid css styling
        amount.classList.add('input-valid');        //adds green/valid css styling
    }

    if (!cardRegex.test(card.value)) {
        valid = false;
        showError('card', 'Please enter a valid card (Visa, Mastercard, American Express and Discover).');
        card.classList.remove('input-valid');
        card.classList.add('input-invalid');
    } else {
        card.classList.remove('input-invalid');
        card.classList.add('input-valid');
    }

    if (!expirationRegex.test(expiration.value)) {
        valid = false;
        showError('expiration', 'Please enter a valid expiration date (MM/YY or MM / YY).');
        expiration.classList.remove('input-valid');
        expiration.classList.add('input-invalid');
    } else {
        expiration.classList.remove('input-invalid');
        expiration.classList.add('input-valid');
    }

    if (!cvcRegex.test(cvc.value)) {
        valid = false;
        showError('cvc', 'Please enter a valid CVC (Visa, Mastercard, American Express and Discover).');
        cvc.classList.remove('input-valid');
        cvc.classList.add('input-invalid');
    } else {
        cvc.classList.remove('input-invalid');
        cvc.classList.add('input-valid');
    }

    if (!nameRegex.test(firstName.value)) {
        valid = false;
        showError('first-name', 'First name must be between 2 and 12 letters.');
        firstName.classList.remove('input-valid');
        firstName.classList.add('input-invalid');
    } else {
        firstName.classList.remove('input-invalid');
        firstName.classList.add('input-valid');
    }

    if (!nameRegex.test(lastName.value)) {
        valid = false;
        showError('last-name', 'Last name must be between 2 and 12 letters.');
        lastName.classList.remove('input-valid');
        lastName.classList.add('input-invalid');
    } else {
        lastName.classList.remove('input-invalid');
        lastName.classList.add('input-valid');
    }

    if (!emailRegex.test(email.value)) {
        valid = false;
        showError('email', 'Please enter a valid email address.');
        email.classList.remove('input-valid');
        email.classList.add('input-invalid');
    } else {
        email.classList.remove('input-invalid');
        email.classList.add('input-valid');
    }

    if (!addressRegex.test(address.value)) {
        valid = false;
        showError('address', 'Please enter a valid address.');
        address.classList.remove('input-valid');
        address.classList.add('input-invalid');
    } else {
        address.classList.remove('input-invalid');
        address.classList.add('input-valid');
    }

    if (!cityRegex.test(city.value)) {
        valid = false;
        showError('city', 'Please enter a valid city.');
        city.classList.remove('input-valid');
        city.classList.add('input-invalid');
    } else {
        city.classList.remove('input-invalid');
        city.classList.add('input-valid');
    }

    if (!state.value) {
        valid = false;
        showError('state', 'Please enter a valid state.');
        state.classList.remove('input-valid');
        state.classList.add('input-invalid');
    } else {
        state.classList.remove('input-invalid');
        state.classList.add('input-valid');
    }

    if (!zipRegex.test(zip.value)) {
        valid = false;
        showError('zip', 'Please enter a valid ZIP code.');
        zip.classList.remove('input-valid');
        zip.classList.add('input-invalid');
    } else {
        zip.classList.remove('input-invalid');
        zip.classList.add('input-valid');
    }

    if (!phoneRegex.test(phone.value)) {
        valid = false;
        showError('phone', 'Please enter a valid phone number.');
        phone.classList.remove('input-valid');
        phone.classList.add('input-invalid');
    } else {
        phone.classList.remove('input-invalid');
        phone.classList.add('input-valid');
    }

    if (!agreeTerms.checked) {
        valid = false;
        showError('terms', 'You must agree to the terms and conditions.');
        agreeTerms.classList.remove('input-valid');
        agreeTerms.classList.add('input-invalid');
    } else {
        agreeTerms.classList.remove('input-invalid');
        agreeTerms.classList.add('input-valid');
    }

    if (valid) { 
        alert('Form submitted successfully'); 
        document.getElementById('form').reset();    // Resets form

        // Remove green/valid css styling
        amount.classList.remove('input-valid');
        card.classList.remove('input-valid');
        cvc.classList.remove('input-valid');
        expiration.classList.remove('input-valid');
        firstName.classList.remove('input-valid');
        lastName.classList.remove('input-valid');
        email.classList.remove('input-valid');
        address.classList.remove('input-valid');
        city.classList.remove('input-valid');
        state.classList.remove('input-valid');
        zip.classList.remove('input-valid');
        phone.classList.remove('input-valid');
        agreeTerms.classList.remove('input-valid');
    }
}

// Error function - passes in id from validate function and spits out corresponding message
function showError(id, message) {
    const errorDiv = document.getElementById(`error-${id}`);
    if (errorDiv) {
        errorDiv.textContent = message;
    }
}