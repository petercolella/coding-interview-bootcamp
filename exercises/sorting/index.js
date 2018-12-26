// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const indexOfNewMin = j;
        if (indexOfMin !== indexOfNewMin) {
          const newMinValue = arr[j];
          arr[j] = arr[i];
          arr[i] = newMinValue;
        }
      }
    }
  }

  return arr;
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort };
