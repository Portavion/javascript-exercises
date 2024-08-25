const add = function(...number) {
	return number.reduce((total,a) => (total+a),0);
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(number) {
  if (number.length === 0){
    return 0;
  }
  else {
    return number.reduce((total,a) => (total+a),0,);
  }
};

const multiply = function(number) {
  if (number.length === 0){
    return 0;
  }
  else {
    return number.reduce((total,a) => (total*a),1,);
  }
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let total = 1;
  if (a === 0){
    return 1;
  }
  else {
    for (let i = a; i > 0; i--){
      total = total*i;
    }
    return total;
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
