
// Function to check empty fields
function isEmpty(value) {
    return value.trim() === "";
}

// Function to validate email
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Function to validate the contact form
function validateForm() {

    let valid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Name validation using if / else
    if (isEmpty(name)) {
        document.getElementById("nameError").textContent =
            "Name is required";
        valid = false;
    }
    else if (name.trim().length < 3) {
        document.getElementById("nameError").textContent =
            "Enter at least 3 characters";
        valid = false;
    }

    // Email validation
    if (!isValidEmail(email.trim())) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address";
        valid = false;
    }

    // Message validation
    if (isEmpty(message)) {
        document.getElementById("messageError").textContent =
            "Message is required";
        valid = false;
    }

    return valid;
}

// Handle form submission
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    if (!validateForm()) {
        event.preventDefault();
    }
    else {
        event.preventDefault();
        alert("Thank you! Your message has been submitted.");
        document.getElementById("contactForm").reset();
    }

});
