main();

function main() {
  const [n, nums] = getInputs();
  solve(n, nums);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [n, nums] = fs.readFileSync(filepath).toString().trim().split("\n");
  n = Number(n);
  nums = nums.split(" ").map((n) => Number(n));
  return [n, nums];
}

function solve(n, nums) {
  let dp = new Array(n).fill(0);
  dp[0] = nums[0]; // dp[i] : i번째 인덱스까지 최대합
  let max = dp[0];
  for (let i = 1; i < n; ++i) {
    if (dp[i - 1] + nums[i] < nums[i]) dp[i] = nums[i];
    else dp[i] = dp[i - 1] + nums[i];
    if (max < dp[i]) max = dp[i];
  }
  console.log(max);
}
