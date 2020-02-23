// function maxOf(myArray){
//     if (myArray.length < 2) {
//       return myArray[0];
//     } else {
//       return Math.max(myArray.pop(), maxOf(myArray))
//     }
//   }

// function includesNumber(myArray, num){
//     if (!myArray.length) {
//       return false;
//     } else if (myArray[0] === num){
//       return true;
//     } else {
//       return includesNumber(myArray.slice(1), num);
//     }
//    }

function findMinAndRemove(array){
    // Math.min(...array) 
    if (array.length < 2) {
        return array[0];
      } else {
        return Math.min(array.pop(), findMinAndRemove(array))
      }
}

function insertionSort(array){
    let newMin;
    let sorted = []
    while(array.length != 0){
      newMin = findMinAndRemove(array)
      sorted.push(newMin)
    }
    return sorted;
}
//example

function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  }

// findTheMin given our original array, and remove that element
 
  // now with the new array, findTheMin again, 
  // and remove that element
 
  // keep doing this until our unsortedArray is empty
 
  // Push these removed elements into an empty array one by one
  // and that empty array will be our sorted array.