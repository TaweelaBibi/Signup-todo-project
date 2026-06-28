let form = document.querySelector("form");

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmError = document.getElementById("confirmError");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // Sab messages clear karo
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmError.innerText = "";

    if(name.value.trim() == ""){
        nameError.innerText = "Name is required";
        return;
    }

    if(email.value.trim() == ""){
        emailError.innerText = "Email is required";
        return;
    }

    if(password.value == ""){
        passwordError.innerText = "Password is required";
        return;
    }

    if(password.value.length < 8){
        passwordError.innerText = "Password must be at least 8 characters";
        return;
    }

    if(confirmpassword.value == ""){
        confirmError.innerText = "Confirm Password is required";
        return;
    }

    if(password.value != confirmpassword.value){
        confirmError.innerText = "Passwords do not match";
        return; 
    }
    localStorage.setItem("name", name.value);
localStorage.setItem("email", email.value);
localStorage.setItem("password", password.value);

window.location.href = "todo.html";

   
});