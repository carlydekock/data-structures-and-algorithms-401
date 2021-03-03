'use strict';

function multiBracketValidation(input) {
  let array = [];
  let characters = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let string = input.replace(/[a-zA-Z ]+/g, '');

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      // stack.push(str[i]);
      array[array.length] = string[i];
    
    }
    else {
      let last = array.pop();

      if (string[i] !== characters[last]) {
        return false;
      }
    }
  }
  if (array.length !==0) {
    return false;
  }

  return true;
}


module.exports = multiBracketValidation;

console.log(multiBracketValidation('{}(){}'));
console.log(multiBracketValidation('(]('));
