export function about_header_text(){
    const content = document.querySelector('#header');
    const about_header = document.createElement("div");
    about_header.textContent = "About Us";
    content.appendChild(about_header);
};

export function about_image(about) {
    const about_image = document.createElement("img");
    about_image.src = about;
    about_image.id = 'about';
    const content = document.querySelector('#content');
    content.appendChild(about_image);
}

export function about_text(){
    const content = document.querySelector('#content');
    const about = document.createElement("div");
    about.classList.add('about_text')
    about.textContent = "Founded in 1988, modernised in 2021, we are a family business dedicated to our craft of fashioning food the only way it should be. The Assembly Ground is the culmination of two generations of toil.";
    content.appendChild(about);

}

