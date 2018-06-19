// My working solution
let size = 6;

for (let i = 0; i < size; i++) {
  let string = "";
  
  if (i % 2 == 0) {
    for (let j = 0; j < size; j++) {
      if (j % 2 == 0) {
        string += " ";
      } else {
        string += "#";
      }
    }
  } else {
    for (let j = 0; j < size; j++) {
      if (j % 2 == 0) {
        string += "#";
      } else {
        string += " ";
      }
    }
  }
 
  console.log(string);
}

// Book solution
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);