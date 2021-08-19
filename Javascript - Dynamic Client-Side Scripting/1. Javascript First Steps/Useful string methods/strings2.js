// In this task you are provided with two variables, quote and substring, which contain two strings. We would like you to:

// Retrieve the length of the quote, and store it in a variable called quoteLength.
// Find the index position where substring appears in quote, and store that value in a  variable called index.
// Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called revisedQuote.

let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';

const quoteLength = quote.length;
const index = quote.indexOf(substring);
revisedQuote = quote.slice(0, index + substring.length + 1);
console.log(revisedQuote);