// My working solution
function range(start, end, increment = 1) {
  let array = [];

  if ( increment < 0 ) {
    for (let i = start; i >= end; i += increment) {
      array.push(i);
    }
  } else {
    for (let i = start; i <= end; i += increment) {
      array.push(i);
    }
  }

  return array;
}

function sum(array) {
  let sum = 0;

  for(let x of array) {
    sum += x;
  }

  return sum;
}

// Book solution
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}