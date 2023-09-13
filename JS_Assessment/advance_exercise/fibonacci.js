const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate Fibonacci sequence
function calculateFibonacci(n) {
  const fibonacciSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextNumber);
  }
  return fibonacciSequence;
}

// Ask the user for input
rl.question('Enter the number of Fibonacci terms to generate: ', (userInput) => {
  const n = parseInt(userInput);

  if (isNaN(n) || n <= 0) {
    console.log("Invalid input. Please enter a positive integer.");
  } else {
    const fibonacciSequence = calculateFibonacci(n);
    console.log(`Fibonacci sequence up to ${n} terms: ${fibonacciSequence.join(', ')}`);
  }

  // Close the readline interface
  rl.close();
});
