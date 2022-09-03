main();

function main() {
  const [n, inputs] = getInputs();
  solve(n, inputs);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [n, ...inputs] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");
  return [+n, inputs.map((str) => str.split(" ").map((n) => +n))];
}

function solve(n, inputs) {
  // 선택 가능한 경로 : [i,j] => [i+1, j] 또는 [i+1, j+1]

  const dp = [];
  for (let i = 0; i < n; ++i) {
    dp.push(inputs[i]);
  }
  let max = dp[0][0];
  for (let i = 1; i < n; ++i) {
    for (let j = 0; j <= i; ++j) {
      let prev;

      if (j === 0) {
        prev = dp[i - 1][j]; // 가장 왼쪽항은 바로 위 행 오른쪽 대각선에서 내려온다
      } else if (i === j) {
        prev = dp[i - 1][j - 1]; // 가장 오른쪽항은 바로 위 행 왼쪽 대각선에서 내려온다
      } else {
        prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j]); // 바로 위 행의 두 항 중 큰값에서 내려온다
      }
      dp[i][j] += prev; // 내려온 항을 현재 항(원래값)에 더한다

      if (i === n - 1) {
        if (max < dp[i][j]) {
          max = dp[i][j];
        }
      }
    }
  }
  console.log(max);
  //   console.log(Math.max(...dp[n - 1]));
}
