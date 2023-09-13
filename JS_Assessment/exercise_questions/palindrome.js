const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(input) {
  // Remove spaces and convert the input to lowercase for a case-insensitive check
  const sanitizedInput = input.toLowerCase().replace(/\s/g, '');

  // Reverse the sanitized input
  const reversedInput = sanitizedInput.split('').reverse().join('');

  // Check if the original and reversed strings are the same
  if (sanitizedInput === reversedInput) {
    console.log(`"${input}" is a palindrome.`);
  } else {
    console.log(`"${input}" is not a palindrome.`);
  }

  rl.close(); // Close the readline interface
});
