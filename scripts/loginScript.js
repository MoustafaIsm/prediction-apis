// Variables
const dogImg = document.querySelector("#dog-img");
const signupForm = document.querySelector("#signup-form");
const signupControl = document.querySelector("#signup-control");
const loginBtn = document.querySelector("#login-btn");
const span = document.querySelector("#close-wrapper");

// set the source of the image
fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json()).then((data) => dogImg.src = data.message);

// Signup control
signupControl.addEventListener("click", toggleSignupForm);
// Span button
span.addEventListener("click", toggleSignupForm)
// Login button
loginBtn.addEventListener("click", loginUser);

// Functions
function toggleSignupForm() {
    signupForm.classList.toggle("hide");
}

function loginUser() {
    console.log("Login");
}