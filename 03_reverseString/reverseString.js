const reverseString = function(phrase) {
    let string = phrase
    let phraseArray = string.split(""); 
    let reversePhraseArray = ""
        for (let i = phraseArray.length - 1; i >= 0; i--)
            {
                reversePhraseArray += phraseArray[i]
                
            }
        return reversePhraseArray;
        
};
// Do not edit below this line
module.exports = reverseString;
