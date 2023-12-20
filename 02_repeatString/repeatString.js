"use strict"
const repeatString = function (phrase, numberOfRepetitions) {

  if (numberOfRepetitions < 0) 
    return "ERROR";
  let string = "";
  for (let i = 0; i < numberOfRepetitions; i++) 
    {
      string += phrase
    }
  return string;
  };

module.exports = repeatString;
