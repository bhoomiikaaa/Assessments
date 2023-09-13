const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function toTitleCase(input) {
  // Split the input into words
  const words = input.split(' ');

  // Capitalize the first letter of each word
  const titleCaseWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the title case words back into a string
  return titleCaseWords.join(' ');
}

rl.question("Enter a string: ", function(input) {
  const titleCaseString = toTitleCase(input);
  console.log(`Title Case: ${titleCaseString}`);
  rl.close(); // Close the readline interface
});
