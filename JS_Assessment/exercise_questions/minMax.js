const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

rl.question("Enter numbers separated by spaces: ", function(input) {
  const numbers = input.split(' ').map(Number); // Split and convert to numbers
  const max = findMax(numbers);
  const min = findMin(numbers);
  console.log(`Maximum: ${max}`);
  console.log(`Minimum: ${min}`);
  rl.close(); // Close the readline interface
});
