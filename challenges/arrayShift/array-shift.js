'use strict';

function insertShiftArray(arr, value) {
  let middle = arr.length / 2;
  let middleIndex = Math.ceil(middle);
  arr.splice(middleIndex, 0, value);
  return arr;
}

module.exports = insertShiftArray;