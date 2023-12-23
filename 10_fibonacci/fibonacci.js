const fibonacci = function(specificMember) {
    if (+specificMember < 0) 
        {
            return "OOPS";
        }
    if  (+specificMember == 0)
        {
            return 0;
        }
    if  (+specificMember < 3)
        {
            return 1;
        }
    else 
        {
            let fibonacciSequence = [1, 1]
                for (let i = 2; i <= +specificMember; i++) {
                    fibonacciSequence.push(fibonacciSequence[(i - 1)] + fibonacciSequence[(i - 2)])
                }
            return fibonacciSequence[+specificMember - 1];
        }
};

// Do not edit below this line
module.exports = fibonacci;
