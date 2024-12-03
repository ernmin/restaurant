export function image_cheese(cheese) {
    const cheese_image = document.createElement("img");
    cheese_image.src = cheese;
    cheese_image.id = 'cheese';
    const content = document.querySelector('#content');
    content.appendChild(cheese_image);
    /*const caption = document.createElement("div");
    caption.classList.add('caption');
    caption.textContent = "Birthplace of all true Foodsmiths";
    content.appendChild(caption);*/
    //ADD CAPTION FOR MENU ITEM
};

//ADD MORE MENU ITEMS

export function menu_header_text(){
    const content = document.querySelector('#content');
    const menu_header = document.createElement("div");
    menu_header.textContent = "Our Menu";
    content.appendChild(menu_header);
};