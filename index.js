//////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Title: Random Quote Generator
// Description: Simple node application that prints random quotes per second interval
// Date: 29/06/2023
// 
/////////////////////////////////////////////////////////////////////////////////////////////////

// Dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 2000,
};

// Function that prints a random quote
app.printQuote = () => {
    // Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const getRandomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at that position in the array (minus one)
    const selectedQuote = allQuotes[getRandomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printQuote function as it goes
app.indefiniteLoop = () => {
    // Create the interval, using the config variable defined above
    setInterval(app.printQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();
