const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

rl.question("Enter numbers separated by spaces: ", function(input) {
  const numbers = input.split(' ').map(Number); // Split and convert to numbers
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(`Array without duplicates: [${uniqueNumbers.join(', ')}]`);
  rl.close(); // Close the readline interface
});
