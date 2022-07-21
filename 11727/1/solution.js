function main() {
  const n = getInputs();
  solve(n);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const num = fs.readFileSync(filepath).toString().trim();
  return parseInt(num);
}

function solve(n) {
  let dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 3;
  for (let i = 3; i < n + 1; ++i) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }
  // 수가 너무 커질 경우, (소수라서) 미리 나누어도 동일함. 
  console.log(dp[n]);
}

main();
