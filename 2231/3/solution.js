// cjs
const num = getInputs();

solve(num);

function construct(num) {
  let composedSum = num;
  const numstr = num.toString();
  for (let i = 0; i < numstr.length; ++i) {
    composedSum += parseInt(numstr[i]);
  }
  return composedSum;
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim();
  return parseInt(inputs);
}

function solve(N) {
  let answer = 0;
  for (let i = 1; i < N; ++i) {
    if (construct(i) === N) {
      answer = i;
      break;
    }
  }
  console.log(answer);
}
