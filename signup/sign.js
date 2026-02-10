
let submit = document.querySelector(".submit");
let form = document.querySelector("form")

let textinp = document.querySelector(".textinp");
    let gvariinp = document.querySelector(".gvariinp");
    let pswinp = document.querySelector(".pswinp");
    let mailinp = document.querySelector(".mailinp");
let eror = document.querySelector(".error");

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    let valid = true;
    if(textinp.value.length <= 6){
eror.textContent = "sheiyvanet saxeli";
eror.classList = "errorr";
valid = false;
    }
if(gvariinp.value.length <= 8){
valid = false;
        eror.textContent = "sheiyvanet gvari";
        eror.classList = "errorr";
}
if(pswinp.value.length <= 8){
    eror.textContent = "sheiyvanet paroli";
    eror.classList = "errorr";
valid = false;

}
if(mailinp.value != "rame@gmail.com"){
    eror.textContent = "sheiyvanet gmaili";
    eror.classList = "errorr";
valid = false;
}
else if(valid = true){
    console.log('sworia');
    eror.textContent = "";
}

})
