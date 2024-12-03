import "./styles.css";
import logo from "./AssemblyGround_logo.png";
import food from "./poetry-and-food.jpeg";
import cheese from "./cheese.jpeg";
import { image_logo, image_food, image_logo_text } from './home.js';
import { image_cheese, menu_header_text } from './menu.js';

image_logo(logo);
image_logo_text();
image_food(food);

function remove_content() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const home = document.querySelector("#home");
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

home.addEventListener('click', () => {
    remove_content();
    image_logo_text();
    image_food(food)
});

menu.addEventListener('click', () => {
    remove_content();
    menu_header_text();
    image_cheese(cheese);
    
});
about.addEventListener('click', remove_content);