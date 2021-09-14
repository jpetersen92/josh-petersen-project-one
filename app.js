// make functional hamburger menu for mobile

const mobileIcon = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('nav ul')


// add event listener (click or mouseOver)
// display nav items on event
mobileIcon.addEventListener('mouseover', () => {
    mobileMenu.className = "open";
});

mobileIcon.addEventListener('mouseout', () => {
    mobileMenu.className = "";
})