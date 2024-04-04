//Script.js

var nav = document.querySelector('nav');
var contactoLink = document.querySelector('.a-last');

var menuButton = document.querySelector('.navbar-toggler');

var banner = document.querySelector('.banner-image');

var menuItems = document.querySelectorAll('.nav-link');
var divMenu = document.getElementById('navbarNav');

function closeMenuIfOpen() {
const isMenuAberto = menuButton.getAttribute("aria-expanded") === "true";
    if (isMenuAberto) {
        menuButton.click(); 
    }
}

menuButton.addEventListener("click", function () {
    const isMenuAberto = menuButton.getAttribute("aria-expanded") === "true";

    if (isMenuAberto) {
        menuItems.forEach(function (item) {
            item.addEventListener("click", function () {
                closeMenuIfOpen(); 
            });
        });
            
        document.body.style.overflow = "hidden"; 
        contactoLink.classList.remove('a-last', 'a-contacto');
        contactoLink.style.color = "#fff";
        divMenu.style.paddingTop = "50px";
        menuItems.forEach(function (item) {
            item.style.textAlign = "center";
        });
        contactoLink.style.border = "none";
    }else {
        
        document.body.style.overflow = "auto"; 
        menuItems.forEach(function (item) {
            item.style.textAlign = "right";
        });
        divMenu.style.paddingTop = "0";
        contactoLink.classList.add('a-last', 'a-contacto');
        contactoLink.style.textAlign = "center";
        contactoLink.style.border = "1px solid #000";
    }
});

window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth;

    const breakpointWidth = 768;

    if (windowWidth > breakpointWidth) {
        closeMenuIfOpen();
    }
});

window.addEventListener('scroll', function(){
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
        contactoLink.style.border = "1px solid #fe823d";
    } else {
        nav.classList.remove('bg-dark', 'shadow');
        contactoLink.style.border = "1px solid #000";
    }
});