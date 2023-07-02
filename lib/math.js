//////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Title: Math Library
// Description: Utility library for math-related function
// Date: 29/06/2023
// 
/////////////////////////////////////////////////////////////////////////////////////////////////

// Math object - Module scaffolding
//Using scaffolding object because when i export the math, I want to export it as object
const math = {};

//Get a random integer between two integers
math.getRandomNumber = function getRandomNumber(min,max){
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random()*(maximum-minimum-1)+min);
};

module.exports = math;