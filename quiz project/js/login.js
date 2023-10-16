// //Cursor:
let curserDot = document.querySelector('[data-curser-dot]');
let curserOutLine = document.querySelector('[data-curser-outline]');

window.addEventListener('mousemove', function (e) {
    let posX = e.clientX;
    let posY = e.clientY;

    curserOutLine.style.left = `${posX}px`
    curserOutLine.style.top = `${posY}px`

    curserDot.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }
        , { duration: 500, fill: "forwards" }
    )
});

// Email validation and Storage:
function validationEmail() {
    let email = document.getElementById("email_input").value;
    let emailError = document.getElementById("email_error");
    let userEmail = localStorage.getItem("userEmail");
    if (email.length != 0) {
        if (email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            emailError.textContent = "";
            if (email == userEmail) {
                return true;
            }
        }
        else {
            emailError.textContent = " Please enter a valid email address ! ";
            return false;
        }
    } else { emailError.textContent = 'Email Address is required !' }
    return false
};
// Password validation and storage:
function validationPass() {
    let userPassw = localStorage.getItem("userPass");
    let passError = document.getElementById("error_pass");
    let passWord = document.getElementById("password").value;
    if (passWord.length != 0) {
        if (passWord == userPassw) {
            passError.textContent = ""
            return true;
        }
        else {
            passError.textContent = "Password is not valid!"
            return false;
        }
    }
    else {
        passError.textContent = 'Password is required !'
        return false;
    }
}
// Password show and hide :
let showPass = document.getElementById("show_password");
let passwordField = document.getElementById("password");
showPass.addEventListener('click', function () {
    if (passwordField.type === "password") {
        showPass.classList.replace("fa-eye-slash", "fa-eye");
        return (passwordField.type = "text");
    }
    else {
        showPass.classList.replace("fa-eye", "fa-eye-slash")
        passwordField.type = "password"
    }
})
// submit and storage :
function quizPage() {
    window.location.href = "../quiz project/quiz.html";
}
var loginBottom = document.getElementById("Login");
loginBottom.addEventListener('click', function (event) {
    event.preventDefault();
    validationEmail();
    validationPass();

    if (validationEmail() && validationPass()) {
        localStorage.setItem('loggedin', 'true');

        window.location.href = "./index.html";

    } else {
        event.preventDefault();
        localStorage.setItem('loggedin', 'false');
    }
});
