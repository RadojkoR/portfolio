// IMPORT MODULES
import typeInit from './typewriterEffect.js';
import scrollInit from './scrollAnimation.js';

//APP OBJECT
const app = {};

//CONSTRUCTS INIT METHOD
app.init = () => {
    app.updateYear();
    typeInit();
    scrollInit();
};

// HAMBURGER MENU

// Make icon ham menu
app.hamburgerEl = document.querySelector(".hamburgerMenu");
app.hamburgerEl.innerHTML = `<i class="fa-solid fa-bars"></i>`;

//Create an event listener for when the user click on the icon
app.iconEl = document.querySelector('i');

 app.hamburgerEl.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.tagName === 'I') {
        app.updateIcon(event.target);
    }
});

//When user click on menu
app.updateIcon = (icon) => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");
    
    // Call .showFlexNav and hide .FlexNav
    icon.parentElement.nextElementSibling.classList.toggle('showFlexNav');
}

//UPDATE COPYRIGHT YEAR
app.updateYear = () => {
    const time = new Date();
    let year = time.getFullYear();

    const spanElUpdateYear = document.querySelector('#copyrightYear');
    spanElUpdateYear.innerText = year;
} 

app.hideMenu = document.querySelector('.menu')
app.hideMenu.addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if(event.target.tagName === 'A') {
        app.hideHamburger(event.target);

    };
});


app.hideHamburger = (listEl) => {
    console.log(listEl.offsetParent);
    listEl.offsetParent.classList.remove("showFlexNav");
    listEl.offsetParent.previousElementSibling.firstChild.classList.toggle("fa-x");
    listEl.offsetParent.previousElementSibling.firstChild.classList.toggle("fa-bars");
    //HIDE HAMBURGER MENU 
    listEl.offsetParent.classList.remove('showFlexNav');
}

//CALL THE INIT METHOD
app.init()

