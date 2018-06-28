// My working solution
function deepEqual(x, y){
  let typeofX = typeof x;
  let typeofY = typeof y;
  
  if (typeofX != typeofY) {
    return false;
  } else {
    if (typeofX == "object") {
      if (x === y) {
        return true
      } else if (x != null && y != null) {
        for (let node in x) {
          return deepEqual(x[node], y[node]);
        }
      } else {
        return false;
      }
    } else {
      return x === y ? true : false;
    }
  }
}

// Book solution
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
    b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
