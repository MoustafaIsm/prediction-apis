const dogImg = document.querySelector("#dog-img");


let imgSrc = fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json()).then((data) => dogImg.src = data.message);



