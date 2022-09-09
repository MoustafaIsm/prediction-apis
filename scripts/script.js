// Variables
const dogImg = document.querySelector("#dog-img");
const userName = document.querySelector("#user-name");
const submitBtn = document.querySelector("#submit-btn");

// set the source of the image
fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json()).then((data) => dogImg.src = data.message);

// Submit button
submitBtn.addEventListener("click", submitUserName);



// Functions
function submitUserName() {
    let name = userName.value;

}
