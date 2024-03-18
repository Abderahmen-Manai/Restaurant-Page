import "./style/reset.css";
import "./style/style.css";
import noodle from "./images/noodle.png";

import { generateHome } from "./Modules/homepage";
import { generateMenu } from "./Modules/MenuPage";
import { generateContact } from "./Modules/ContactPage";

// Get the logo-container element
const LogoContainer = document.querySelector(".logo-container");

// Create an image element
const logoImg = document.createElement("img");

// Set the src attribute of the image to the noodle variable
logoImg.src = noodle;

// Append the image to the logo-container element
LogoContainer.appendChild(logoImg);

const container = document.querySelector(".container");
const menu = document.querySelector("#menu");
const home = document.querySelector("#home");
const contact = document.querySelector("#contact");

menu.addEventListener('click',()=>{
    container.innerHTML = generateMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
});

home.addEventListener('click',()=>{
    container.innerHTML = generateHome();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
});

contact.addEventListener('click',()=>{
    container.innerHTML = generateContact();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
});

// Initialize container content with the home page content
container.innerHTML = generateHome();
