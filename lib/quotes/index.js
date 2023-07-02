//////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Title: Quotes Library
// Description: Utility library for getting list of quotes
// Date: 29/06/2023
// 
/////////////////////////////////////////////////////////////////////////////////////////////////

//Dependencies
const fs = require('fs');

//Quotes object = Module scaffolding
const quotes = {};

//Get all the quotes and return them to the server
quotes.allQuotes = function allQuotes(){
    //REad the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`,'utf8');

    //Turn the string into an array
    const arrayofQuotes = fileContents.split(/\r?\n/);

    //Return the array
    return arrayofQuotes;
}

module.exports = quotes;