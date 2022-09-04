main();

function main() {
  const [T, inputs] = getInputs();
  for (let i = 0; i < T; ++i) {
    const n = inputs.shift();
    const row1 = inputs.shift();
    const row2 = inputs.shift();
    solve(
      +n,
      row1.split(" ").map((n) => +n),
      row2.split(" ").map((n) => +n)
    );
  }
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [T, ...inputs] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");
  return [+T, inputs];
}

function solve(n, row1, row2) {
  let dp = [];
  // 해당 칸을 선택했을 때 최대점수
  dp.push([0, ...row1]);
  dp.push([0, ...row2]);

  for (let j = 1; j < n + 1; ++j) {
    for (let i = 0; i < 2; ++i) {
      if (j === 1) {
        continue;
      }
      if (i === 0) {
        dp[i][j] += Math.max(dp[1][j - 1], dp[1][j - 2]);
      } else {
        dp[i][j] += Math.max(dp[0][j - 1], dp[0][j - 2]);
      }
    }
  }
  console.log(Math.max(dp[0][n], dp[1][n]));
}