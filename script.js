// 🟢 Toggle Background Color
let isBlue = false;
function toggleBackgroundColor() {
    document.body.style.backgroundColor = isBlue ? "#ffffff" : "#f0f0f0";
    isBlue = !isBlue;
}

// 🟢 Adjust Text Size Using Slider
function adjustTextSize() {
    let slider = document.getElementById("text-size-slider");
    let paragraph = document.getElementById("dynamic-text");
    paragraph.style.fontSize = slider.value + "px";
}

// 🟢 Modal Functionality
function openModal() {
    document.getElementById("modal").style.display = "block";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// 🟢 Form Validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");

    let isValid = true;

    // Name Validation (Minimum 3 characters)
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation (Valid email format)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation (Minimum 8 characters, 1 uppercase, 1 number)
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters, include an uppercase letter and a number.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Submit the form if valid
    if (isValid) {
        alert("Form submitted successfully!");
    }
}

// 🟢 Dropdown Selection Event
function showDropdownMessage() {
    let dropdown = document.getElementById("dropdown");
    let message = document.getElementById("dropdown-message");
    message.textContent = "You selected: " + dropdown.value;
}
