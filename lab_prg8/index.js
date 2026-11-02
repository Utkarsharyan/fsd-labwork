const fs = require('fs');
const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question('Enter some text: ', function (text) {
  fs.writeFile('output.txt', text, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Text saved to output.txt');
    }

    input.close();
  });
});
