const stdin = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trimEnd()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while (true) {
  const count = parseInt(input());
  if (count === 0) break;

  const nums = [];
  for (let i = 0; i < count; ++i) {
    nums.push(parseInt(input()));
  }
  solve(count, nums);
}

function solve(N, nums) {
  const dp = Array(N + 1);
  dp[0] = -Infinity;
  dp[1] = nums[0];
  for (let i = 1; i <= N; ++i) {
    dp[i] = Math.max(dp[i - 1] + nums[i - 1], nums[i - 1]);
  }
  console.log(Math.max(...dp));
}
