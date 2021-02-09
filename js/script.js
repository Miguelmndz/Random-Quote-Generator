/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

// List of objects containing quotes, source = name, citation = where it was from, and year = year published
const quotes = [
  {
    quote: "Make things as simple as possible, but not simpler.",
    source: "Albert Einstein",
    year: "9999"
  },
  {
    quote: "If you cant explain it simply, you dont understand it well enough.",
    source: "Albert Einstein",
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi",
  },
  {
    quote: "Your time is limited so don't waste it living someone else's life.",
    source: "Steve Jobs",
  },
  {
    quote: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
    source: "Harry Burns",
    citation: "When Harry Met Sally",
    year: "1989"
  },
];


/***
 * `getRandomQuote` function
***/
// Accepts an array, returns a random object from the array
function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length) 
  return arr[randomNumber];
}
/***
 * `printQuote` function
***/
// Uses getRandomQoute function to store the random object 
function printQuote() {
  const quoteObject = getRandomQuote(quotes);
  const quote = quoteObject.quote;
  const source = quoteObject.source
  const citation = quoteObject.citation;
  const year = quoteObject.year;

  let quoteHTML = `
    <p class="quote">"${quote}"</p>
    <p class="source">${source}
  `;

  // If the property 'citation' is in the object concatnate it to the quoteHTMl and close the p element from quoteHTML
  if ( 'citation' in quoteObject && 'year' in quoteObject){
    quoteHTML += `
    <span class="citation">${citation}</span><span class="year">${year}</span></p>
    `;
  } else if ('citation' in quoteObject) {
    quoteHTML += `
    <span class="citation">${citation}</span></p>
    `;
  } else if ('year' in quoteObject) {
    quoteHTML += `
    <span class="year">${year}</span></p>`
    ;
  } else {
    quoteHTML += `</p>`
  }

  return document.getElementById('quote-box').innerHTML = quoteHTML; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);