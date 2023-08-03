function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  //starting index of two arrays

  while (
    leftArrayIndex < leftArray.length &&
    rightArrayIndex < rightArray.length
  ) {
    if (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
      result.push(leftArray[leftArrayIndex]);
      leftArrayIndex++;
    } else {
      result.push(rightArray[rightArrayIndex]);
      rightArrayIndex++;
    }
  }

  return result.concat(
    leftArray.slice(leftArrayIndex),
    rightArray.slice(rightArrayIndex)
  );
}
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
