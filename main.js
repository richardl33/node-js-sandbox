'use strict';

var secondInteger = "12",
    secondDecimal = "4.32",
    secondString = "is the best place to learn and practice coding!",
    secVal;

var parseNumbers = function(secArg){
   if ((secArg - Math.floor(secArg)) !== 0) {
      secVal = parseFloat(secArg);
   } else {
      secVal = parseInt(secArg);
   }
   return secVal;
}

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HR ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    var firstSum = firstInteger + parseNumbers(secondInteger);
    var firstSumTotal = firstSum;

    console.log(firstSumTotal);
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    var secondDecimal = firstDecimal + parseNumbers(secondDecimal);
    var secondDecimalTotal = secondDecimal;

    console.log(secondDecimalTotal);
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    var stringConcat = firstString + secondString;

    console.log(stringConcat);
}

performOperation(secondInteger, secondDecimal, secondString);