const hamburguerMenuBttn = document.querySelector(
  ".header__hamburguer-menu"
) as HTMLElement;
const closeBttn = document.querySelector(
  ".header__nav__close-icon"
) as HTMLElement;
const navBarMenu = document.querySelector(".header__nav__back") as HTMLElement;
const navMenu = document.querySelector(".header__nav__menu") as HTMLElement;

// Add event listener to the hamburger menu button
hamburguerMenuBttn.addEventListener("click", toggleMenu);

closeBttn.addEventListener("click", toggleMenu);

// Add event listener to change the menu based on window width
window.addEventListener("resize", handleWindowResize);

// Function to display the hamburger menu by default
function showHamburguerMenu(): void {
  hamburguerMenuBttn.style.display = "block";
  closeBttn.style.display = "none"; // Hide closeBttn
  navBarMenu.style.display = "none";
}

// Function to hide the hamburger menu and display the main menu
function hideHamburguerMenu(): void {
  hamburguerMenuBttn.style.display = "none";
  closeBttn.style.display = "none"; // Hide closeBttn
  navBarMenu.style.display = "block";
}

// Function to handle the click event on the hamburger menu
function toggleMenu(): void {
  if (window.innerWidth < 1200) {
    if (navBarMenu.style.display === "block") {
      navBarMenu.style.display = "none";
      closeBttn.style.display = "none"; // Hide closeBttn
      document.body.style.overflow = "auto"; // Re-enable scrolling
    } else {
      navBarMenu.style.display = "block";
      closeBttn.style.display = "block"; // Show closeBttn
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  }
}

// Add event listener to change the menu based on window width
function handleWindowResize(): void {
  if (window.innerWidth >= 1200) {
    hideHamburguerMenu();
  } else {
    showHamburguerMenu();
  }
}

// Call handleWindowResize() when the page loads to set the initial state
window.addEventListener("load", handleWindowResize);
