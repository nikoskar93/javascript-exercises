const sumAll = function(num1,num2) {
    
    let sumOfAll=0;
    let maxNumber= (Math.max(num1, num2));
    let minNumber= (Math.min(num1, num2));
    if (num1<0 || num2<0) {
        return ('ERROR');
    } else if (typeof(num1) !== 'number'|| typeof(num2)!=='number') {
        return ('ERROR');
    } else {
        for (let i=minNumber; i<=maxNumber; i++ ) {
            sumOfAll+=i;
        }
        return sumOfAll;
    } };

// Do not edit below this line
module.exports = sumAll;
