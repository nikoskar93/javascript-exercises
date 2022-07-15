const removeFromArray = function(...args) {
    let myArray=args[0];
    
    return myArray.filter(val => !args.includes(val))
        
};

// Do not edit below this line
module.exports = removeFromArray;
