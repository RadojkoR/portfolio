// HAMBURGER MENU

// Make icon ham menu
const app = {};

app.hamburgerEl = document.querySelector(".hamburgerMenu");
app.hamburgerEl.innerHTML = `<i class="fa-solid fa-bars"></i>`;

//Create an event listener for when the user click on the icon
app.iconEl = document.querySelector('i');

app.hamburgerEl.addEventListener('click', (event) => {
    if(event.target.tagName === 'I') {
        app.updateIcon(event.target)
    }
});

//When user click on menu
app.updateIcon = (icon) => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");
    
    // Call .showFlexNav and hide .FlexNav
    icon.parentElement.nextElementSibling.classList.toggle('showFlexNav')
    // console.log(icon.parentElement.nextElementSibling.classList.toggle('showFlexNav'));
}