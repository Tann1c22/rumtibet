import "./css/style.sass";
const form = document.querySelector(".subscribe__form");
const input = form.querySelector(".subscribe__input");


function formSubmit(e){
    let inputValue = input.value

    e.preventDefault();
    console.log("Submit form");
    console.log(inputValue);
    
}
form.addEventListener("submit", formSubmit);