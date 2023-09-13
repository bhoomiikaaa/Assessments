const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to check if a number is odd or even
function checkOddEven(number) {
  return number % 2 === 0 ? 'even' : 'odd';
}

// Ask the user for input
rl.question('Enter numbers of array:', (userInput) => {
  const numbers = userInput.split(' ').map(Number);

  if (numbers.some(isNaN)) {
    console.log("Invalid input. Please enter valid numbers separated by spaces.");
  } else {
    const result = numbers.map((number) => ({
      number,
      type: checkOddEven(number),
    }));

    console.log('Number\tType');
    result.forEach(({ number, type }) => {
      console.log(`${number}\t${type}`);
    });
  }

  // Close the readline interface
  rl.close();
});
