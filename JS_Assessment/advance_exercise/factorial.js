const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate the factorial of a number
function calculateFactorial(number) {
  if (number < 0) {
    return "Factorial is not defined for negative numbers.";
  } else if (number === 0) {
    return 1; // The factorial of 0 is defined as 1.
  } else {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

// Ask the user for input
rl.question('Enter a number to calculate its factorial: ', (userInput) => {
  const number = parseInt(userInput);

  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    const result = calculateFactorial(number);
    console.log(`The factorial of ${number} is: ${result}`);
  }

  // Close the readline interface
  rl.close();
});
