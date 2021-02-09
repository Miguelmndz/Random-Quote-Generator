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
    year: "1933"
  },
  {
    quote: "If you cant explain it simply, you dont understand it well enough.",
    source: "Albert Einstein"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi"
  },
  {
    quote: "Your time is limited so don't waste it living someone else's life.",
    source: "Steve Jobs"
  }, {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Walt Disney"
  }, {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon"
  }, {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Nelson Mandela",
    tag: "Motivation"
  }, {
    quote: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
    source: "Harry Burns",
    citation: "When Harry Met Sally",
    year: "1989",
    tag: "Motivation"
  }, {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: "Dead Poets",
    citation: "Society",
    year: "1989",
    tag: "Motivation"
  }, {
    quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Forrest Gump",
    citation: "Forrest Gump",
    year: "1994",
    tag: "Motivation"
  }
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
 * `backgroundChange` function
***/

// Picks a random rgb color to change the background and adds a transiton
function backgroundChange() {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.transition = `0.5s`;
}

/***
 * `printQuote` function
***/
// Uses getRandomQoute function to store the random object get it's contents through dot notaion and stores it in html syntax
function printQuote() {
  const quoteObject = getRandomQuote(quotes);
  const quote = quoteObject.quote;
  const source = quoteObject.source
  const citation = quoteObject.citation;
  const year = quoteObject.year;
  const tag = quoteObject.tag;

  let quoteHTML = `
    <p class="quote">${quote}</p>
    <p class="source">${source}`;

  // If the certain properties are in the object, concatnate it to the quoteHTMl and close the p element from quoteHTML. Lastly, perform background change function

  if ('citation' in quoteObject) {
    quoteHTML += `<span class="citation">${citation}</span>`;
  }
  if ('year' in quoteObject) {
    quoteHTML += `<span class="year">${year}</span>`;
  }
  if ('tag' in quoteObject) {
    quoteHTML += `<span class="tag"> ${tag}</span>`;
  }
  quoteHTML += `</p>`
  backgroundChange()
  return document.getElementById('quote-box').innerHTML = quoteHTML;
}

// Set an interval timmer to change to a quote every 6 seconds
setInterval(function () {
  printQuote()
}, 6000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
