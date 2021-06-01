// In the next string task, you are given the same quote that you ended up with in the previous task, but it is somewhat broken! We want you to fix and update it, like so:

// Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
// In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
// There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called finalQuote.

let quote = 'I dO nOT lIke gREen eGgS anD HAM';
quote = quote.toLowerCase();
// console.log(quote);
const firstLetter = quote[0];
const upperFirstLetter = firstLetter.toUpperCase();
const fixedQuote = quote.replace(quote[0], upperFirstLetter);
console.log(fixedQuote);