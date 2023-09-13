const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(input) {
  // Reverse the string
  const reversedString = input.split("").reverse().join("");
  console.log(`Reversed string: ${reversedString}`);
  
  rl.close(); // Close the readline interface
});
