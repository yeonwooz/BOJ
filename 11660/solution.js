main();

function main() {
  const inputs = getInputs();
  let [N, M] = inputs.shift().split(" ");
  [N, M] = [+N, +M];
  const arr = [];
  for (let i = 0; i < +N; ++i) {
    arr.push(
      inputs
        .shift()
        .split(" ")
        .map((n) => +n)
    );
  }

  // 각 행의 합이 누적되는 DP
  const dp = new Array(N).fill(0);

  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      dp[i] += arr[i][j];
    }
  }

  const answer = [];
  for (let i = 0; i < M; ++i) {
    const [x1, y1, x2, y2] = inputs.shift().split(" ");
    answer.push(solve(arr, N, dp, +x1 - 1, +y1 - 1, +x2 - 1, +y2 - 1));
  }
  console.log(answer.join("\n"));
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

// 각 행의 합 구해두자
function solve(arr, N, dp, x1, y1, x2, y2) {
  let sum = 0;

  if (x1 + 2 <= x2) {
    for (let row = x1 + 1; row < x2; ++row) {
      sum += dp[row];
      for (let col = 0; col < N; ++col) {
        if (col < y1 || col > y2) {
          sum -= arr[row][col];
        }
      }
    }
  }

  for (let col = y1; col <= y2; ++col) {
    if (x1 === x2) {
      sum += arr[x1][col];
    } else {
      sum += arr[x1][col];
      sum += arr[x2][col];
    }
  }

  return sum;
}
