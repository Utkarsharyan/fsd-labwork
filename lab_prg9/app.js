const fileOperations = require('./fileOperations');

fileOperations.writeFile('sample.txt', 'Hello from the custom module!\n');
fileOperations.appendFile('sample.txt', 'This line was appended.\n');

const data = fileOperations.readFile('sample.txt');
console.log(data);
