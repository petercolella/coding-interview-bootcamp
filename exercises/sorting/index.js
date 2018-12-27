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

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const indexOfMin = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         const indexOfNewMin = j;
//         if (indexOfMin !== indexOfNewMin) {
//           const newMinValue = arr[j];
//           arr[j] = arr[i];
//           arr[i] = newMinValue;
//         }
//       }
//     }
//   }

//   return arr;
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

// function mergeSort(arr) {
//   const arr1 = [];
//   const arr2 = [];

//   for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
//     arr1.push(arr[i]);
//   }

//   for (let i = arr.length - 1; i > Math.floor(arr.length / 2); i--) {
//     arr2.push(arr[i]);
//   }

//   if (arr1.length === 1 || arr2.length === 1) {
//     return merge(arr1, arr2);
//   } else {
//     mergeSort(arr1);
//     mergeSort(arr2);
//   }
// }

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  console.log('mergeSort left: ', left, 'mergeSort right: ', right);

  return merge(mergeSort(left), mergeSort(right));
}

// function merge(left, right) {
//   const results = [];

//   while (left.length > 0 && right.length > 0) {
//     if (left[0] < right[0]) {
//       results.push(left.shift());
//     } else {
//       results.push(right.shift());
//     }
//   }

//   for (let el of left) {
//     results.push(el);
//   }

//   for (let el of right) {
//     results.push(el);
//   }

//   return results;
// }

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    console.log('merge left: ', left, 'merge right: ', right);
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

const test = [100, -40, 500, -124, 0, 21, 7];

console.log(mergeSort(test));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
