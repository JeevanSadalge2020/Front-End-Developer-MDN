let myArray = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];
myArray.pop();
myArray.push('Jeevan');
myArray.push('Sourabh');

for (let i = 0; i < myArray.length; i++) {
    let element = myArray[i];
    element = `${element} (${i})`;
    myArray[i] = element;
}
let myString = myArray.join(' - ');
console.log(myString);