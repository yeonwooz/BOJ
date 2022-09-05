main();

function main() {
  const inputs = getInputs();
  const [N, M] = inputs.shift().split(" ");
  const arr = [];
  for (let i = 0; i < +N; ++i) {
    arr.push(
      inputs
        .shift()
        .split(" ")
        .map((n) => +n)
    );
  }
  const answer = [];
  for (let i = 0; i < +M; ++i) {
    const [x1, y1, x2, y2] = inputs.shift().split(" ");
    answer.push(solve(arr, +N, +x1, +y1, +x2, +y2));
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

function solve(arr, N, x1, y1, x2, y2) {
  const dp = Array(N);
  for (let i = 0; i < N; ++i) {
    dp[i] = Array(N).fill(0);
  }

  for (let i = x1 - 1; i <= x2 - 1; ++i) {
    for (let j = y1 - 1; j <= y2 - 1; ++j) {
      if (j === x1 - 1) {
        if (i === 0) {
          dp[i][j] = arr[i][j];
        } else {
          dp[i][j] = dp[i - 1][y2 - 1] + arr[i][j];
        }
      } else {
        dp[i][j] = dp[i][j - 1] + arr[i][j];
      }
    }
  }

  return dp[x2 - 1][y2 - 1];
}
