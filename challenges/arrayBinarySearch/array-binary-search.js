'use strict';

function binarySearch (sortedArray, searchKey) {
  //start with entire sortedArray
  let start = 0;
  let end = sortedArray.length - 1;
  while (start <= end){
    //calculate middle index
    let middleIndex = Math.floor((start + end)/2);
    //middleIndex value = searchKey
    if (sortedArray[middleIndex] === searchKey){
      return middleIndex;
      //continue searching to the right (higher values)
    } else if (sortedArray[middleIndex] < searchKey){
      start = middleIndex + 1;
      //continue searching to the left (lower values)
    } else {
      end = middleIndex - 1;
    }
  }
  //key wasn't found, return -1
  return -1;
}

module.exports = binarySearch;