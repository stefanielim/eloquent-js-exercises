// My working solution
for (let number = 1; number <= 100; number++) {
  switch (true) {
    case (number % 3 == 0 && number % 5 == 0):
      console.log("FizzBuzz");
      continue;
    case (number % 3 == 0):
      console.log("Fizz");
      continue;
    case (number % 5 == 0):
      console.log("Buzz");
      continue;
    default:
      console.log(number);
  }
}

// Book solution
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}