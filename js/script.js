// IMPORT MODULES
import typeInit from './typewriterEffect.js';
import scrollInit from './scrollAnimation.js';
import projectDetailsModalInit from './projectDetailsModal.js';


//APP OBJECT
const app = {};

//CONSTRUCTS INIT METHOD
app.init = () => {
    app.updateYear();
    typeInit();
    scrollInit();
    projectDetailsModalInit();
};

app.hamburgerEl = document.querySelector(".hamburgerMenu");
app.hamburgerEl.innerHTML = `<i id="hamMenuIcon" class="fa-solid fa-bars"></i>`;
app.backdrop = document.getElementById('backdrop');
app.hideMenu = document.querySelector('.menu');
app.flexNav = document.getElementById('flexNav');
let toggleFlexNav = false;

//Create an event listener for when the user click on the icon
app.iconEl = document.getElementById('hamMenuIcon');
 app.hamburgerEl.addEventListener('click', (e) => {
    e.preventDefault();
    toggleFlexNav = !toggleFlexNav;
    app.showHideMenu()
    app.updateIcon();
    app.showHideBackdrop()
});

//When user click on menu
app.updateIcon = () => {
    if(!toggleFlexNav){
        app.iconEl.classList.add("fa-bars");
        app.iconEl.classList.remove("fa-x");
    } else {
        app.iconEl.classList.remove("fa-bars");
        app.iconEl.classList.add("fa-x");
    }
}

app.showHideMenu = () => {
    if(toggleFlexNav){
        app.flexNav.classList.add('showFlexNav');
    } else {
        app.flexNav.classList.remove('showFlexNav');
    }
}

//UPDATE COPYRIGHT YEAR
app.updateYear = () => {
    const time = new Date();
    let year = time.getFullYear();
    const spanElUpdateYear = document.querySelector('#copyrightYear');
    spanElUpdateYear.innerText = year;
} 

app.backdrop.addEventListener('click', () => {
        toggleFlexNav = !toggleFlexNav;
        app.showHideBackdrop()
        app.flexNav.classList.remove('showFlexNav');
        app.updateIcon();
})

// TOGGLE BACKDROP
app.showHideBackdrop = () => {
    if(toggleFlexNav) {
        backdrop.classList.add("visibleBackdrop");
        backdrop.style = "z-index: 8";
    } else {
        backdrop.classList.remove("visibleBackdrop");
        backdrop.style = "z-index: ";
    } 
};

app.hideMenu.addEventListener('click', (event) => {
    console.log(window.getComputedStyle(app.hamburgerEl).visibility)
    if(event.target.tagName === 'A' && window.getComputedStyle(app.hamburgerEl).visibility === 'visible') {
        toggleFlexNav = !toggleFlexNav;
        app.showHideBackdrop()
        app.updateIcon();
        app.showHideMenu()
    };
});

//CALL THE INIT METHOD
app.init()

