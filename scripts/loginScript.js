// Variables
const dogImg = document.querySelector("#dog-img");
const signupForm = document.querySelector("#signup-form");
const signupControl = document.querySelector("#signup-control");
const loginBtn = document.querySelector("#login-btn");
const span = document.querySelector("#close-wrapper");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const signupUsername = document.querySelector("#signup-username");
const signupEmail = document.querySelector("#signup-email");
const signupPassword = document.querySelector("#signup-password");
const signupBtn = document.querySelector("#signup-btn");
const response = document.querySelector("#response");

// set the source of the image
fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json()).then((data) => dogImg.src = data.message);

// Signup control
signupControl.addEventListener("click", toggleSignupForm);
// Span button
span.addEventListener("click", toggleSignupForm)
// Login button
loginBtn.addEventListener("click", loginUser);
// Signup button
signupBtn.addEventListener("click", createAccount);

// Functions
function toggleSignupForm() {
    signupForm.classList.toggle("hide");
}

function loginUser() {
    let emailInput = loginEmail.value;
    let passwordInput = loginPassword.value;
    if (emailInput != "" && passwordInput != "") {
        let emailStored = localStorage.getItem("email");
        let passwordStored = localStorage.getItem("password");
        if (emailInput == emailStored && passwordInput == passwordStored) {
            window.location.href = "./index.html";
        } else {
            response.textContent = "Wrong email or password!"
            response.style.color = "red";
        }
    }
}

function createAccount() {
    let username = signupUsername.value;
    let email = signupEmail.value;
    let password = signupPassword.value;
    if (username != "" && email != "" && password != "") {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        toggleSignupForm();
        response.textContent = "Account created!"
        response.style.color = "green";
    }
}