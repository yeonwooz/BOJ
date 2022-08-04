main();

function main() {
  const [N, inputs] = getInputs();
  solve(N, inputs);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [N, ...inputs] = fs.readFileSync(filepath).toString().trim().split("\n");
  N = Number(N);
  inputs = inputs.map((row) => row.split(" ").map((n) => Number(n)));
  return [N, inputs];
}

function solve(N, bills) {
  let dp = new Array(N + 1);
  for (let i = 0; i < N + 1; ++i) {
    dp[i] = new Array(3).fill(1001);
  }
  // dp[i][j] : i번째 집을 j색깔로 칠하는 최소비용
  dp[1][0] = bills[0][0]; //r
  dp[1][1] = bills[0][1]; //g
  dp[1][2] = bills[0][2]; //b

  for (let i = 2; i <= N; ++i) {
    dp[i][0] = bills[i - 1][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = bills[i - 1][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = bills[i - 1][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }
  console.log(min(dp[N][0], dp[N][1], dp[N][2]));
}

function min(a, b, c) {
  if (a <= b) {
    if (c <= a) return c;
    return a;
  } else {
    if (c <= b) return c;
    return b;
  }
}
