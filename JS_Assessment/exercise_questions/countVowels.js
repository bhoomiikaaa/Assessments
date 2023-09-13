const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(input) {
  // Convert the input to lowercase to handle both uppercase and lowercase vowels
  const inputLowercase = input.toLowerCase();

  // Define a function to count vowels
  function countVowels(input) {
    const vowels = "aeiou";
    let vowelCount = 0;

    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        vowelCount++;
      }
    }

    return vowelCount;
  }

  // Call the countVowels function and display the result
  const vowelCount = countVowels(inputLowercase);
  console.log(`Number of vowels: ${vowelCount}`);

  rl.close(); // Close the readline interface
});
