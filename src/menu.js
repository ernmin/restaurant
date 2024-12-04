export function menu_layout(){
    const content = document.querySelector('#content');
    const menu_layout = document.createElement("div");
    menu_layout.id = "menu-layout";
    content.appendChild(menu_layout);
    
}

export function image_cheese(cheese) {
    const cheese_image_div = document.createElement("div");
    cheese_image_div.classList.add("menu-item")
    const cheese_image = document.createElement("img");
    cheese_image.src = cheese;
    cheese_image.id = 'cheese';
    const menu_layout = document.querySelector('#menu-layout');
    menu_layout.appendChild(cheese_image_div).appendChild(cheese_image);
    const cheese_image_caption = document.createElement("figcaption");
    cheese_image_caption.textContent = "Cheese Platter";
    cheese_image_div.appendChild(cheese_image_caption);
    
};

export function image_meat(meat) {
    const meat_image_div = document.createElement("div");
    meat_image_div.classList.add("menu-item")
    const meat_image = document.createElement("img");
    meat_image.src = meat;
    meat_image.id = 'meat';
    const menu_layout = document.querySelector('#menu-layout');
    menu_layout.appendChild(meat_image_div).appendChild(meat_image);
    const meat_image_caption = document.createElement("figcaption");
    meat_image_caption.textContent = "Cured Iberico Meat";
    meat_image_div.appendChild(meat_image_caption);
    
};

//ADD MORE MENU ITEMS

export function menu_header_text(){
    const content = document.querySelector('#header');
    const menu_header = document.createElement("div");
    menu_header.textContent = "Our Menu";
    content.appendChild(menu_header);
};