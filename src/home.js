export function image_logo(logo) {
    const image = document.createElement("img");
    image.src = logo;
    const content = document.querySelector('#content');

    content.appendChild(image);
}

//https://www.theassemblyground.com/