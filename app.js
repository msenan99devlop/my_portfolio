// ==== TYPED.JS EFFECT ====
var typed = new Typed(".typing", {
    strings: [' Full-Stack Developer ', 'Data Analytic ', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true
});

// ==== SOCIAL NAME SHOW/HIDE ====
function showName(element) {
    element.querySelector('.social-name').style.opacity = '1';
}

function hideName(element) {
    element.querySelector('.social-name').style.opacity = '0';
}
