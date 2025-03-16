console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8'); // Ensure proper encoding

let inputData = '';

process.stdin.on('data', (data) => {
  inputData += data; // Accumulate input
});

// Handle EOF properly
process.stdin.on('end', () => {
  console.log(`Your name is: ${inputData.trim()}`);
  console.log('This important software is now closing');
});
