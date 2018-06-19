// My working solution
let string = "#";
for (counter = 0; counter < 7; counter++) {
  console.log(string);
  string += "#";
}

// Book solution
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);