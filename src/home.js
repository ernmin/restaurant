export function image_logo(logo) {
    const image = document.createElement("img");
    image.src = logo;
    image.id = 'logo';
    const header = document.querySelector('#header');
    header.appendChild(image);
}

export function image_logo_text(){
    const content = document.querySelector('#content');
    const welcome = document.createElement("div");
    welcome.textContent = "Welcome to The Assembly Ground";
    content.appendChild(welcome);
}

export function image_food(food) {
    const food_image = document.createElement("img");
    food_image.src = food;
    food_image.id = 'food';
    const content = document.querySelector('#content');
    content.appendChild(food_image);
    const caption = document.createElement("div");
    caption.classList.add('caption');
    caption.textContent = "Birthplace of all true Foodsmiths";
    content.appendChild(caption);
}

//https://www.theassemblyground.com/