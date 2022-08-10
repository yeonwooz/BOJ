main();

function main() {
  const X = getInputs();
  solve(X);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const X = fs.readFileSync(filepath).toString().trim();
  return +X;
}

function solve(X) {
  let bars = [64];
  let sum = 0;
  while (1) {
    sum = bars.reduce((prev, cur) => prev + cur, 0);
    if (sum <= X) break;
    bars.sort((a, b) => a - b);
    const frontHalf = bars.shift() / 2;
    if (sum - frontHalf >= X) bars.unshift(frontHalf);
    else {
      bars.unshift(frontHalf);
      bars.unshift(frontHalf);
    }
  }

  // 막대 몇개로 X만들 수 있는지?
  console.log(bars.length);
}
