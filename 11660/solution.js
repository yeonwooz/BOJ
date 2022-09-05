main();

function main() {
  const inputs = getInputs();
  let [N, M] = inputs.shift().split(" ");
  [N, M] = [+N, +M];
  // const arr = [];
  // console.log(inputs)
  // for (let i = 0; i < +N; ++i) {
  //   arr.push(
  //     inputs
  //       .shift()
  //       .split(" ")
  //       .map((n) => +n)
  //   );
  // }

  const dp = Array(N);
  // arr[0][0] 부터 arr[i][j]까지의 직사각형 구간합
  for (let i = 0; i < N; ++i) {
    dp[i] = Array(N).fill(0);
    const row = inputs[i].split(" ");
    for (let j = 0; j < N; ++j) {
      if (i === 0 && j === 0) {
        dp[i][j] = Number(row[j]);
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + Number(row[j]);
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + Number(row[j]);
      } else {
        dp[i][j] =
          dp[i - 1][j - 1] +
          (dp[i - 1][j] - dp[i - 1][j - 1]) +
          (dp[i][j - 1] - dp[i - 1][j - 1]) +
          Number(row[j]);
      }
    }
  }
  // console.log("dp", dp);
  const answer = [];
  for (let i = inputs.length - M; i < inputs.length; ++i) {
    const [x1, y1, x2, y2] = inputs[i].split(" ");
    answer.push(solve(dp, N, +x1 - 1, +y1 - 1, +x2 - 1, +y2 - 1));
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

function solve(dp, N, x1, y1, x2, y2) {
  let sum = dp[x2][y2];

  if (y1 > 0) {
    sum -= dp[x2][y1 - 1];
  }

  if (x1 > 0) {
    sum -= dp[x1 - 1][y2];
  }

  if (x1 > 0 && y1 > 0) {
    sum += dp[x1 - 1][y1 - 1];
  }
  return sum;
}
