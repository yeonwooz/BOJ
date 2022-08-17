main();

function main() {
  const n = getInputs();
  console.log(solve(n));
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const n = fs.readFileSync(filepath).toString().trim();
  return BigInt(n);
}

function solve(n) {
  let dp = [BigInt(0), BigInt(1)];
  for (let i = 2; i <= n; ++i) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n].toString();
}
