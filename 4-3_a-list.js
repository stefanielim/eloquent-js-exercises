// My working solution
function arrayToList(array) {
  let list = null;
  for (let element of array.reverse()) {
    list = { value: element, rest: list };
  }
  return list;
}

function listToArray(list, array=[]) {
  for (let key in list) {
    if (typeof list[key] == "object") {
      return listToArray(list[key], array);
    } else {
      array.push(list[key]);
    }
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, index, depth=0) {
  if (depth == index) {
    return list["value"];
  } else {
    if (list["rest"] === null || typeof list["rest"] != "object") {
      return undefined;
    } else {
      depth++;
      return nth(list["rest"], index, depth); 
    }
  }   
}

// Book solution
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}