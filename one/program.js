// const fs = require("fs")
// console.log('beginning execution')
// const fileContent = fs.readFileSync("./input.txt", "utf-8");

// console.log('file content: ', fileContent)
// let totalSum = 0;

// let numberCoalesce = false;



//37809 is too low

const fs = require('fs');
const readline = require('readline');
let currentNumberString = ""
async function processLineByLine() {
  let totalSum = 0;
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let digitMap = {
    "one": '1',
    "two": '2',
    "three": '3',
    "four": '4',
    "five": '5',
    "six": '6',
    "seven": '7',
    "eight": '8',
    "nine": '9'
  }
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (let line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    let firstChar = null;
    let lastChar = "";
    console.log(`Line from file: ${line}`);
    line.replace()
    let regex = new RegExp(Object.keys(digitMap).join("|"), "g");
    line = line.replace(regex, (matched) => digitMap[matched]);
    console.log(`Line from file 2: ${line}`);
    for (let char of line) {

      if (!isNaN(parseInt(char))) {
        if (firstChar === null) {
          firstChar = char
          currentNumberString += firstChar;
          lastChar = char
        } else {
          lastChar = char
        }
      }
    }
    currentNumberString += lastChar;
    console.log('line adding: ', currentNumberString)
    totalSum += parseInt(currentNumberString)
    currentNumberString = ""
  }
  return totalSum
}

processLineByLine()
  .then(totalSum => {
    console.log('total sum: ', totalSum)
  })
  .catch(error => {
    console.log('error: ', error)
  })
// console.log("Total Sum: ", totalSum)



