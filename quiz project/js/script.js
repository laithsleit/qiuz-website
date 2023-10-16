let btnSectionOne = document.getElementById('btn-lofin-center')
let signinButton = document.getElementById('signinButton')
let signupButton = document.getElementById('signupButton')
let btnRj3a = document.querySelector('.btn-rj3')
let cont = document.querySelector('.container')
let about = document.getElementById('about')
let curserDot = document.querySelector('[data-curser-dot]');
let curserOutLine = document.querySelector('[data-curser-outline]');
let btnOpen = document.getElementById('menu-open');
let list = document.querySelector('ul');
let letClose = document.getElementById('close-menu');
let plet = document.getElementById('paragraph-main');
let fname = document.getElementById('firstname');
let stordname = localStorage.getItem('firstName');
let startbutton1 = document.getElementById('bt1');
let startbutton2 = document.getElementById('bt2');
let startbutton3 = document.getElementById('bt3');



btnOpen.addEventListener('click', () => {
    list.style.right = "0";
});
letClose.addEventListener('click', () => {
    list.style.right = "-1200px";
});
window.addEventListener('mousemove', function (e) {
    let posX = e.clientX;
    let posY = e.clientY;

    curserDot.style.left = `${posX}px`
    curserDot.style.top = `${posY}px`

    curserOutLine.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }
        , { duration: 500, fill: "forwards" }
    )
})
window.onscroll = function () {
    if (window.scrollY >= 220) {
        cont.style.transform = "scale(1)";
        cont.style.opacity = "1";
    } else {
        cont.style.transform = "scale(0)";
        cont.style.opacity = "0";
    }
    if (window.scrollY >= 420) {
        about.style.transform = "scale(1)";
        about.style.opacity = "1";
        btnRj3a.style.right = "20px"
        btnRj3a.style.transform = "scale(1)";
        btnRj3a.style.opacity = "1";
    } else {
        btnRj3a.style.right = "-220px"
        btnRj3a.style.opacity = "0";
        btnRj3a.style.transform = "scale(0)";
        about.style.transform = "scale(0)";
        about.style.opacity = "0";
    }
}
let loggedin = localStorage.getItem('loggedin');
if (loggedin === 'true') {
    signupButton.innerHTML = '<a id="signupButton" href="./login.html">LOG OUT</a>';
    btnSectionOne.innerHTML = '<a  href="#qbox">Start Quiz</a>';
    plet.innerHTML = '';
    fname.innerHTML = `${stordname}`;

    signupButton.addEventListener('click', (e) => {
        signinButton.innerHTML = '<a  href="./login.html">Start</a>';
        window.location.href = './login.html'
        localStorage.setItem('loggedin', 'false');

    });

} else {

}


startbutton1.addEventListener('click', () => {

    const loggedin = localStorage.getItem('loggedin');

    if (loggedin === 'true') {
        window.location.href = 'pre-html.html';
    } else {
        window.location.href = './login.html';
    }
});

startbutton2.addEventListener('click', () => {
    const loggedin = localStorage.getItem('loggedin');

    if (loggedin === 'true') {
        window.location.href = 'pre-css.html';
    } else {
        window.location.href = './login.html';
    }
});


startbutton3.addEventListener('click', () => {
    const loggedin = localStorage.getItem('loggedin');

    if (loggedin === 'true') {
        window.location.href = 'pre-js.html';
    } else {
        window.location.href = './login.html';
    }
});