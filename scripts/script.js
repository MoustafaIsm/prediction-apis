// Variables
const dogImg = document.querySelector("#dog-img");
const userName = document.querySelector("#user-name");
const submitBtn = document.querySelector("#submit-btn");
const genderDisplay = document.querySelector("#gender-display");
const ageDisplay = document.querySelector("#age-display");
const nationalityDisplay = document.querySelector("#nationality-display");

// set the source of the image
fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json()).then((data) => dogImg.src = data.message);

// Submit button
submitBtn.addEventListener("click", submitUserName);



// Functions
function submitUserName() {
    let name = userName.value;
    if (name != "") {
        fetch("https://api.genderize.io?name=" + name)
            .then((response) => response.json())
            .then((data) => genderDisplay.textContent = data.gender);
        fetch("https://api.agify.io/?name=" + name)
            .then((response) => response.json())
            .then((data) => ageDisplay.textContent = data.age);
        fetch("https://api.nationalize.io/?name=" + name)
            .then((response) => response.json())
            .then((data) => {
                if (data.country.length > 0) {
                    if (data.country.length < 2) {
                        nationalityDisplay.textContent = data.country[0];
                    } else {
                        nationalityDisplay.textContent = data.country[0].country_id + ", " + data.country[1].country_id;
                    }
                }
            });
    }
}
