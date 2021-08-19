const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const newImage = document.createElement('img');
let x = "";
// newImage.setAttribute('src', x);
// thumbBar.appendChild(newImage);

for (i = 1; i < 6; i++) {
    x = "images/pic" + i + ".jpg";
    newImage.setAttribute("src", x);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
