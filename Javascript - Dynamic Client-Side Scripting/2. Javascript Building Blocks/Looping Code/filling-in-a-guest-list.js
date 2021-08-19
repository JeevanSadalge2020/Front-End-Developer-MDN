const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
let admitted = [];
let refused = [];
for (let i = 0; i < people.length; i++) {
    const guest = people[i];
    if (guest !== "Phil" && guest !== "Lola") {
        admitted.push(guest);
    } else {
        refused.push(guest);
    }
}
console.log(`"Admitted guest list is : "
${admitted}.`);
console.log(`"Refused guest list is : "
${refused}.`);