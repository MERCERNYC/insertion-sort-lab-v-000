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
