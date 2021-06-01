let greetings = ['Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'];
let newList = [];
for (let i = 0; i < greetings.length; i++) {
    if (greetings[i].includes('Christmas')) {
        newList.push(greetings[i]);
    }
}
console.log(newList);