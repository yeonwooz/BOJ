function main() {
  const str = getInputs();
  const arr = [];
  let num = 0;
  for (let c of str) {
    if (c === "-" || c === "+") {
      arr.push(num);
      arr.push(c);
      num = 0;
    } else {
      num = num * 10 + parseInt(c);
    }
  }
  arr.push(num);
  const answer = solve(arr);
  console.log(answer);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim();
  return inputs;
}

function solve(arr) {
  let i = 0;
  let sum = 0;
  let sign = 1;
  while (1) {
    if (i === arr.length) break;
    if (arr[i] === "+") {
      ++i;
      continue;
    } else if (arr[i] === "-") {
      sign = -1;
    } else {
      sum += arr[i] * sign;
    }
    ++i;
  }
  return sum;
}

main();
