main();

function main() {
  const [S, n] = getInputs();
  console.log(solve(S, n));
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  inputs.shift();
  const n = Number(inputs.pop());
  inputs = inputs[0].split(" ").map((n) => Number(n));
  return [inputs, n];
}

function solve(S, n) {
  if (S.findIndex((num) => num === n) > -1) return 0;
  S.sort((a, b) => a - b);
  let min = 0;
  let max = 0;
  for (let i = 0; i < S.length; ++i) {
    if (S[i] < n) {
      min = S[i];
    } else if (S[i] > n && max === 0) {
      max = S[i];
    }
  }

  max -= 1;
  min += 1;
  const cnt = (n - min) * (max - n + 1) + (max - n);
  return cnt;
}
