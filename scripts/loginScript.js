// Variables
const signupForm = document.querySelector("#signup-form");
const signupControl = document.querySelector("#signup-control");
const loginBtn = document.querySelector("#login-btn");

// Signup control
signupControl.addEventListener("click", toggleSignupForm);
// Login button
loginBtn.addEventListener("click", loginUser);

// Functions
function toggleSignupForm() {
    console.log("Here");
    signupForm.classList.toggle("hide");
}

function loginUser() {
    console.log("Login");
}