const palindromes = function (originalString) {
    let reverseModifiedString = originalString.replace(/[\s\p{P}]/gu, "").split("").reverse().join("").toLowerCase()
    let originalModifiedString = originalString.replace(/[\s\p{P}]/gu, "").toLowerCase()
    if (reverseModifiedString == originalModifiedString) 
        {
           return true; 
        }
    else 
        {
            return false;
        }
};

// palindromes("ZZZZ car, a man, a maracaz.")
// Do not edit below this line
module.exports = palindromes;
