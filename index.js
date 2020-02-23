// function maxOf(myArray){
//     if (myArray.length < 2) {
//       return myArray[0];
//     } else {
//       return Math.max(myArray.pop(), maxOf(myArray))
//     }
//   }

function includesNumber(myArray, num){
    if (!myArray.length) {
      return false;
    } else if (myArray[0] === num){
      return true;
    } else {
      return includesNumber(myArray.slice(1), num);
    }
   }

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
