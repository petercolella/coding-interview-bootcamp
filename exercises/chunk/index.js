// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// }

function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    // declare a variable for the last array in the new chunked array
    const last = chunked[chunked.length - 1];
    // if chunked is an empty array (last doesn't exist) or the length of last has reached the appropriate size
    if (!last || last.length === size) {
      // a new array of the element is pushed into the chunked array
      chunked.push([element]);
    } else {
      //or the element will be pushed into the last array
      last.push(element);
    }
  }
  return chunked;
}

// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// }

// function chunk(arr, length) {
//   const newArr = [];
//   for (i = 0; i < arr.length; i += 0) {
//     if (arr.length > length) {
//       let subArr = arr.splice(i, length);
//       newArr.push(subArr);
//     } else newArr.push(arr.splice(0));
//   }
//   return newArr;
// }

// const test = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(chunk(test, 10));

module.exports = chunk;
