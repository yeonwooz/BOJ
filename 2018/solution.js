main();

function main() {
  const N = getInputs();
  solve(N);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const N = fs.readFileSync(filepath).toString().trim();
  return +N;
}

function solve(N) {
  let left = 1;
  let right = N;
  let cnt = 0;
  while (left <= N) {
    let sum = 0;
    for (let i = left; i <= right; ++i) {
      sum += i;
      if (sum > N) {
        sum -= i;
        break;
      }
    }
    if (sum === N) ++cnt;
    ++left;
  }
  console.log(cnt);
}
