// //Cursor:
let curserDot = document.querySelector('[data-curser-dot]');
let curserOutLine = document.querySelector('[data-curser-outline]');

window.addEventListener('mousemove' , function(e) {
    let posX = e.clientX;
    let posY = e.clientY;

    curserOutLine.style.left = `${posX}px`
    curserOutLine.style.top = `${posY}px`

    curserDot.animate({
        left: `${posX}px`,
        top: `${posY}px`}
        , { duration:500 , fill:"forwards"}
    )
});

// First Name validation:
function validationFirst(){
    let firstInput = document.getElementById("first_input").value;
    let firstError = document.getElementById("first_error");
    if(firstInput.length != 0){
        firstError.textContent = '';
        return true;
    }else{
        firstError.textContent='First name is required !';
        return false; }}
// Last Name validation :
function validationLast(){
 let lastInput = document.getElementById("last_input").value;
 let lastError = document.getElementById("last_error");
 if(lastInput.length != 0){
    lastError.textContent = '';
    return true;
}else{
    lastError.textContent ='Last name is required !';
    return false }}
// Email Validation :
function validationEmail(){
   let email = document.getElementById("email_input");
   let emailError = document.getElementById("email_error")
    if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
     emailError.textContent='Please Enter a valid email address !';
      return false;
    }
    else{
        emailError.textContent='';
         return true;}}
// Passwords show and hide:
let showPass = document.getElementById("show_password");
let passwordField = document.getElementById("create-password");
showPass.addEventListener('click', function (){
    if (passwordField.type === "password"){
        showPass.classList.replace("fa-eye-slash", "fa-eye");
        return (passwordField.type = "text");
    }
    else {showPass.classList.replace("fa-eye","fa-eye-slash")
          passwordField.type = "password" }
})
let showCon = document.getElementById("confirm_password");
let confirmField = document.getElementById("confirm-password")
showCon.addEventListener('click', function (){
    if (confirmField.type === "password"){
        showCon.classList.replace("fa-eye-slash", "fa-eye");
        return (confirmField.type = "text")
    }
    else {showCon.classList.replace("fa-eye","fa-eye-slash");
        confirmField.type = "password"}})
// Password validation:
let createField = document.getElementById("create-password");
let createError =document.getElementById("create_error");
function validationCreate(){
        if(!createField.value.match( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[?!@#$%^&*])[A-Za-z\d@$!%*?&#]{8,}$/)){
        createError.textContent="Please enter atleast 8 character with number, symbol, small and capital letter !  "; 
        return false;
      }else{
        createError.textContent="";
        return true}} 

      
// Confirm Password :
function checkPassword(){
let passworD = document.getElementById("create-password").value;
let cnfrmPassword = document.getElementById("confirm-password").value;
let errorCheck = document.getElementById ("confirm_error");
 
if (passworD.length != 0 ){
    if (passworD === cnfrmPassword ){
        errorCheck.textContent = "";
        return true
    }
    else{
        errorCheck.textContent = "Passwords don't match !"
        return false
    }
} else{errorCheck.textContent = "Password is required !"
     return false}}


//Local storage:
function addData(){
 var emailUser = document.getElementById("email_input").value;
 var passwordUser = document.getElementById("create-password").value;
 var firstname = document.getElementById("first_input").value

  localStorage.setItem('userEmail',emailUser);
  localStorage.setItem('userPass', passwordUser);
  localStorage.setItem('firstName' , firstname);
}

// Before submit :
function loginPage() {
    window.location.href = "login.html";}
var signBottom = document.getElementById("button");
      signBottom.addEventListener("click", function(event) {
    event.preventDefault();
    validationFirst();
    validationLast();
    validationEmail();
    validationCreate();
    checkPassword();
    addData(); 

    if (validationFirst() && validationLast() && validationEmail() && validationCreate() && checkPassword()) {
        loginPage();
    }
});