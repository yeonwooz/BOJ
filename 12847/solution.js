main();

function main() {
  const [meta, arr] = getInputs();

  solve(meta[0], meta[1], arr);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [meta, arr] = fs.readFileSync(filepath).toString().trim().split("\n");
  return [meta.split(" ").map((n) => +n), arr.split(" ").map((n) => +n)];
}

function solve(n, m, arr) {
  if (m === 0) return 0;
  if (n === 1) return arr[0];
  
  // 길이 n 인 arr에서 길이 m만큼의 최대 누적합
  let i = 0;
  let maxSum = 0;
  while (i <= n - m) {
    let sum = 0;
    for (idx = i; idx <= i + m - 1; ++idx) {
      sum += arr[idx];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
    ++i;
  }
  console.log(maxSum);
}
