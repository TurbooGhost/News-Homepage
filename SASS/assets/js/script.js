var hamburguerMenuBttn = document.querySelector(".header__hamburguer-menu");
var closeBttn = document.querySelector(".header__nav__close-icon");
var navBarMenu = document.querySelector(".header__nav__back");
var navMenu = document.querySelector(".header__nav__menu");
// Add event listener to the hamburger menu button
hamburguerMenuBttn.addEventListener("click", toggleMenu);
closeBttn.addEventListener("click", toggleMenu);
// Add event listener to change the menu based on window width
window.addEventListener("resize", handleWindowResize);
// Function to display the hamburger menu by default
function showHamburguerMenu() {
    hamburguerMenuBttn.style.display = "block";
    closeBttn.style.display = "none"; // Hide closeBttn
    navBarMenu.style.display = "none";
}
// Function to hide the hamburger menu and display the main menu
function hideHamburguerMenu() {
    hamburguerMenuBttn.style.display = "none";
    closeBttn.style.display = "none"; // Hide closeBttn
    navBarMenu.style.display = "block";
}
// Function to handle the click event on the hamburger menu
function toggleMenu() {
    if (window.innerWidth < 1200) {
        if (navBarMenu.style.display === "block") {
            navBarMenu.style.display = "none";
            closeBttn.style.display = "none"; // Hide closeBttn
            document.body.style.overflow = "auto"; // Re-enable scrolling
        }
        else {
            navBarMenu.style.display = "block";
            closeBttn.style.display = "block"; // Show closeBttn
            document.body.style.overflow = "hidden"; // Disable scrolling
        }
    }
}
// Add event listener to change the menu based on window width
function handleWindowResize() {
    if (window.innerWidth >= 1200) {
        hideHamburguerMenu();
    }
    else {
        showHamburguerMenu();
    }
}
// Call handleWindowResize() when the page loads to set the initial state
window.addEventListener("load", handleWindowResize);
