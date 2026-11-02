const fs = require('fs');

function readFile(fileName) {
  return fs.readFileSync(fileName, 'utf8');
}

function writeFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

function appendFile(fileName, data) {
  fs.appendFileSync(fileName, data);
}

module.exports = { readFile, writeFile, appendFile };
