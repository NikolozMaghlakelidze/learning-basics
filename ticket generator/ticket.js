let photo = document.querySelector(".photo");
let full = document.querySelector(".full");
let mail = document.querySelector(".mail");
let git = document.querySelector(".git");
let submit = document.querySelector(".submit");
let form = document.querySelector("form");
let shedegi = document.getElementById("shedegi")
let fff = document.querySelector(".fff");

let dt = document.querySelector(".dt");
let imagg = document.querySelector(".imagg");
let saxel = document.querySelector(".saxel");
let user = document.querySelector(".user");

submit.addEventListener('click', () =>{
    event.preventDefault();
    if(full.value.length >= 8 && mail.value.endsWith("@gmail.com") && git.value.length >= 8){
    saxel.textContent = full.value;
    imagg.src = photo.value;
    user.textContent = git.value;
    form.style.display = "none";
    shedegi.style.display = "block";
    }
    else{
        fff.textContent = "shecdoma"
    }
})