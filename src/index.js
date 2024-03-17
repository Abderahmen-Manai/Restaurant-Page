import "./style/reset.css";
import "./style/style.css";
import "./images/noodle.png";

import { generateHome } from "./Modules/homepage";
import { generateMenu } from "./Modules/MenuPage";
import { generateContact } from "./Modules/ContactPage";

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
