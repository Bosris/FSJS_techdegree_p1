/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


var quotes = [
  {
    quote: 'Skills are cheap. Passion is priceless.',
    source: 'Gary Vaynerchuk',
  },
  {
    quote: 'Your legacy is being written by yourself. Make the right decisions.',
    source: 'Gary Vaynerchuk',
  },
  {
    quote: 'When you want to succeed as bad as you want to breathe, then you’ll be successful.',
    source: 'Eric Thomas'
  },
  {
    quote: 'It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going.',
    source: 'Brian Tracy'
  },
  {
    quote: 'May the Force be with you.',
    source: 'Star Wars',
    year: '1977'
  },
  {
    quote: 'I\'ll be back.',
    source:'Arnold Schwarzenegger',
    citation: 'The Terminator',
    year: '1984'
  }
];


// Creates and returns a random quote
function getRandomQuote(){
  var randomNum = Math.floor(Math.random() * quotes.length) ;
  return (quotes[randomNum]);

};

// Prints the random quote to the screen
function printQuote(){
  var randomQuote = getRandomQuote();
  var htmlQuote = `<p class=\"quote\">${randomQuote.quote}</p>`;

  // Checks if the quote has a year AND a citation property
  
  if (randomQuote.hasOwnProperty('year') && randomQuote.hasOwnProperty('citation')){
   htmlQuote += `<p class=\"source\">${randomQuote.source}<span class=\"citation\">${randomQuote.citation}</span><span class=\"year\">${randomQuote.year}</span></p>`;
  } else if (randomQuote.hasOwnProperty('citation')){
    htmlQuote += `<p class=\"source\">${randomQuote.source}<span class=\"citation\">${randomQuote.citation}</p>`;
  } else if (randomQuote.hasOwnProperty('year')){
    htmlQuote += `<p class=\"source\">${randomQuote.source}<span class=\"year\">${randomQuote.year}</span></p>`;
  } else {
    htmlQuote += `<p class=\"source\">${randomQuote.source}`;
  };
  document.getElementById('quote-box').innerHTML = htmlQuote;
}

// Calls the function printQuote
printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
