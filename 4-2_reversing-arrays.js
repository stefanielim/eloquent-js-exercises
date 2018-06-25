// My working solution
function reverseArray(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) reversedArray.push(array[i]);
  return reversedArray;
}

function reverseArrayInPlace(array) {
  let arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0 ; i--) array.push(array[i]);
  
  for (let j = 0; j < arrayLength; j++) array.shift();
  
  return array;
}

// Book solution
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

/* 
Notes:

The book's reverseArrayInPlace will take half the time of the reverseArray function as it replaces two values in the same loop iteration and, thus, does half the loop iterations. 

Though I'm unsure, I feel that the reverseArray function would be useful in more situations as it does not permanently change the input, so the input can be used again later/manipulated further.
*/
