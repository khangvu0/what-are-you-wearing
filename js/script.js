// Variables
const form = document.getElementById('form');
const amount = document.getElementById('amount');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const zip = document.getElementById('zip');
const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const phone = document.getElementById('phone');
const errorElement = document.getElementById('error');
form.prepend(errorElement); // Put it at the top of the form

// Regular Expressions
const nameRegex = /^[a-zA-Z0-9]{2,12}$/; // 2-12 alphanumeric characters
const phoneRegex = /^[\+]?[0-9]{0,3}\W?+[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const zipRegex = new RegExp("^\\d{5}$"); // Matches exactly 5 digits

// TODO: Setup event listener to pass through to the html that validates inputs

// Validation function
function validateForm(event) {
    let errors = [];

    // Validate Amount
    if (!amount.value || amount.value <= 0) {
        errors.push("Amount is required and should be greater than 0.");
    }

    // Validate First Name
    if (!nameRegex.test(firstName.value)) {
        errors.push("First name is required and should only contain 2-12 alphabetic characters.");
    }

    // Validate Last Name
    if (!nameRegex.test(lastName.value)) {
        errors.push("Last name is required and should only contain 2-12 alphabetic characters.");
    }

    // Validate Email
    if (!emailRegex.test(email.value)) {
        errors.push("Please enter a valid email address.");
    }

    // Validate Address
    if (!address.value) {
        errors.push("Address is required.");
    }

    // Validate ZIP Code
    if (!zipRegex.test(zip.value)) {
        errors.push("ZIP code is required and should be exactly 5 digits.");
    }

    // Validate City
    if (!city.value) {
        errors.push("City is required.");
    }

    // Validate State
    if (!state.value) {
        errors.push("State is required.");
    }

    // Validate Country
    if (!country.value) {
        errors.push("Country is required.");
    }

    // Validate Phone
    if (!phoneRegex.test(phone.value)) {
        errors.push("Please enter a valid phone number.");
    }

    // Validate Terms and Conditions checkbox
    const agreeTerms = document.getElementById('agree-terms');
    if (!agreeTerms.checked) {
        errors.push("You must agree to the Terms & Conditions.");
    }

    // Display errors if any
    if (errors.length > 0) {
        event.preventDefault(); // Prevent form submission
        errorElement.innerHTML = `<ul><li>${errors.join('</li><li>')}</li></ul>`;
        errorElement.style.color = 'red';
    } else {
        errorElement.innerHTML = ""; // Clear previous error messages
    }
}

// Event Listener for form submission
form.addEventListener('submit', validateForm);




// Helper Functions for Validation
// function validateAmount() {
//     if (amount.value === "" || parseFloat(amount.value) <= 0) {
//         return "Please enter a valid donation amount.";
//     }
//     return null;
// }

// function validateName(name) {
//     if (!nameRegex.test(name.value)) {
//         return `Please enter a valid ${name.id.replace('-', ' ')}.`;
//     }
//     return null;
// }

// function validateEmail() {
//     if (!emailRegex.test(email.value)) {
//         return "Please enter a valid email address.";
//     }
//     return null;
// }

// function validateAddress() {
//     if (address.value.trim() === "") {
//         return "Please enter your address.";
//     }
//     return null;
// }

// function validateZip() {
//     if (!zipRegex.test(zip.value)) {
//         return "Please enter a valid 5-digit ZIP code.";
//     }
//     return null;
// }

// function validateCity() {
//     if (city.value.trim() === "") {
//         return "Please enter your city.";
//     }
//     return null;
// }

// function validateState() {
//     if (state.value === "") {
//         return "Please select a state.";
//     }
//     return null;
// }

// function validateCountry() {
//     if (country.value === "") {
//         return "Please select a country.";
//     }
//     return null;
// }

// function validatePhone() {
//     if (!phoneRegex.test(phone.value)) {
//         return "Please enter a valid phone number.";
//     }
//     return null;
// }

// function validateTerms() {
//     if (!agreeTerms.checked) {
//         return "You must agree to the Terms & Conditions.";
//     }
//     return null;
// }

// // Form Submission Handler
// form.addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission for validation

//     let errors = [];

//     // Validate each field and collect error messages
//     const amountError = validateAmount();
//     if (amountError) errors.push(amountError);

//     const firstNameError = validateName(firstName);
//     if (firstNameError) errors.push(firstNameError);

//     const lastNameError = validateName(lastName);
//     if (lastNameError) errors.push(lastNameError);

//     const emailError = validateEmail();
//     if (emailError) errors.push(emailError);

//     const addressError = validateAddress();
//     if (addressError) errors.push(addressError);

//     const zipError = validateZip();
//     if (zipError) errors.push(zipError);

//     const cityError = validateCity();
//     if (cityError) errors.push(cityError);

//     const stateError = validateState();
//     if (stateError) errors.push(stateError);

//     const countryError = validateCountry();
//     if (countryError) errors.push(countryError);

//     const phoneError = validatePhone();
//     if (phoneError) errors.push(phoneError);

//     const termsError = validateTerms();
//     if (termsError) errors.push(termsError);

//     // Show all errors if any
//     if (errors.length > 0) {
//         alert(errors.join("\n")); // You can replace this with a nicer UI for errors
//     } else {
//         // If no errors, proceed with form submission (can be AJAX, etc.)
//         alert("Form submitted successfully!");
//         form.submit();
//     }
// });
