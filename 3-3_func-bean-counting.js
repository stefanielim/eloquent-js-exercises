// My working solution
function countBs(string) {  
    return countChar(string, "B");
}

function countChar(string, character) {
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) count++;
  }

  return count;
}

// Book solution
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}