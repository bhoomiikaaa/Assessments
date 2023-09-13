const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

rl.question("Enter numbers separated by spaces: ", function(input) {
  const numbers = input.split(' ').map(Number); // Split and convert to numbers
  const result = sumArray(numbers);
  console.log(`Sum of the numbers: ${result}`);
  rl.close(); // Close the readline interface
});
