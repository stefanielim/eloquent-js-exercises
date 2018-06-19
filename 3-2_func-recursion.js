// My working solution
function isEven(n) {
  if (n === 0) {
      return true;
    } else if (n === 1) {
      return false;
    } else if (n < 0) {
      return isEven(n+2);
    } else {
        return isEven(n-2);
    }
}

// Book solution
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}