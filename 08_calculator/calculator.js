const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num3,num4) {
	return num3-num4;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a+b,0);
};

const multiply = function(arr) {
  let answer=1;
  for (let i=0; i<arr.length; i++) {
    answer*=arr[i];
  }
  return answer;
};

const power = function(num7,num8) {
  return Math.pow(num7,num8);
	
};

const factorial = function(num9) {
	let x=1;
  if (num9==0||num9==1) {
    return x;
  } else {
    for (let i=num9; i>=1; i--) {
      x=x*i;
    }
    return x;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
