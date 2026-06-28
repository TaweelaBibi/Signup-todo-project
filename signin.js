let email = document.getElementById("email");
let password = document.getElementById("password");
let signinBtn = document.getElementById("signinBtn");

let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let loginError = document.getElementById("loginError");

signinBtn.addEventListener("click",function(){
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    loginError.innerHTML = "";

  let savedEmail = localStorage.getItem("email");
  let savedPassword = localStorage.getItem("password");
  if(email.value == "" || password.value == ""){
    emailError.innerHTML = "Email is required ";
    return;
  }
  if(password.value === "" ){
    passwordError.innerHTML = "password is required ";
    return;
  }
  if(email.value == savedEmail && password.value == savedPassword){
    window.location.href = "home.html";
  }else{
    loginError.innerHTML = "Invalid emai or password ";
  }

});