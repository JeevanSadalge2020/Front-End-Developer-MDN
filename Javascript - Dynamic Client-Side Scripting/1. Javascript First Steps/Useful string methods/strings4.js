// In the final string task, we have given you the name of a theorem, two numeric values, and an incomplete string (the bits that need adding are marked with asterisks (*)). We want you to change the value of the string as follows:

// 1. Change it from a regular string literal into a template literal.
// 2. Replace the four asterisks with four template literal placeholders. These should be:

// 1. The name of the theorem.
// 2. The two number values we have.
// 3. The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.


let theorem = 'Pythagorean theorem';

let a = 3;
let b = 4;

let myString = 'Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.';

myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt((a ** 2 + b ** 2))}`;

console.log(myString);