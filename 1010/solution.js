main();

function main() {
  const [T, cases] = getInputs();
  for (let i = 0; i < T; ++i) {
    let answer = solve(cases[i][0], cases[i][1]);
    console.log(answer);
  }
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [T, ...cases] = fs.readFileSync(filepath).toString().trim().split("\n");
  T = Number(T);
  cases = cases.map((row) => row.split(" ").map((n) => Number(n)));
  return [T, cases];
}

function solve(N, M) {
  let dividend = 1;
  let divisor = 1;
  let i = 1;
  while (i <= N) {
    dividend *= M - i + 1;
    divisor *= i;
    ++i;
  }
  return Math.round(dividend / divisor);
}
