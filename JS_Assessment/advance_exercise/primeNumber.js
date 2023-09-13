const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

// Ask the user for input
rl.question('Enter a number to check if it is prime: ', (userInput) => {
  const number = parseInt(userInput);

  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    const isPrimeResult = isPrime(number);
    if (isPrimeResult) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is not a prime number.`);
    }
  }

  // Close the readline interface
  rl.close();
});
