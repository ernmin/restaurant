export function image_logo(logo) {
    const image = document.createElement("img");
    image.src = logo;
    image.id = 'logo';
    const content = document.querySelector('#content');
    content.appendChild(image);
    const welcome = document.createElement("div");
    welcome.textContent = "Welcome to Assembly Ground";
    content.appendChild(welcome);
    //content.textContent = "Welcome to Assembly Ground";
}

export function description() {

}

//https://www.theassemblyground.com/