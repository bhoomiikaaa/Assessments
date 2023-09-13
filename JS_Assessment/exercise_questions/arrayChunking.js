const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function chunkArray(arr, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

rl.question("Enter numbers separated by spaces: ", function(input) {
  const numbers = input.split(' ').map(Number); // Split and convert to numbers
  rl.question("Enter the chunk size: ", function(chunkSizeInput) {
    const chunkSize = parseInt(chunkSizeInput, 10);

    if (isNaN(chunkSize) || chunkSize <= 0) {
      console.log("Invalid chunk size.");
      rl.close();
      return;
    }

    const chunks = chunkArray(numbers, chunkSize);
    console.log("Chunked array:", chunks);
    rl.close(); // Close the readline interface
  });
});
