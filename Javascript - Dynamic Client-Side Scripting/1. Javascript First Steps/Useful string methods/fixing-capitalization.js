let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for (let i = 0; i < cities.length; i++) {
    let element = cities[i];
    element = element.toLowerCase();
    let firstLetter = element[0];
    element = element.replace(element[0], firstLetter.toUpperCase());
    console.log(element);
}