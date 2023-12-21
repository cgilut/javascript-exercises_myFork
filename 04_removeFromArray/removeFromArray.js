const removeFromArray = function(array, ...removeArguments) {
    const modifiedArray = array.filter(function (element) 
    {
        return !removeArguments.includes(element);
    });
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;



