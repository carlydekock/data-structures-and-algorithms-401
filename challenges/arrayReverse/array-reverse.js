'use strict';

function reverseArray(arr) {
  // console.log(arr);
  const result = [];
  for(let i = arr.length -1; i >= 0; i--){
    result.push(arr[i]);
  }
  // console.log(result);
  return result;
}

module.exports = reverseArray;