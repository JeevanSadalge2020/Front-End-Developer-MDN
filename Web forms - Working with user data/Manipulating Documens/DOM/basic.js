"use strict";

const btn = document.querySelector(".btn");

function addPara() {
    const randomNum = Math.floor(Math.random() * 100);
    const pContent = `The random no is ${randomNum}`;
    const element = document.createElement('p');
    element.textContent = pContent;
    document.body.appendChild(element);
}
btn.onclick = addPara;