const leapYears = function(year) {
    // if year is devided by 400 then its leap\
    if (year % 400 === 0) {
        return true;
    }
    if (
        year % 4 === 0 &&
        year % 100 !== 0
    ) {
        return true;
    }
    else {
        return false;
    }
    // if year is devided by 4 AND NOT devided by 100 then its leap

};

// Do not edit below this line
module.exports = leapYears;
