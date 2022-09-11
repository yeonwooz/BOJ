main();

function main() {
  const [N, maxDp] = getInputs();
  //   console.log(N, arr);
  solve(N, maxDp);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, ...maxDp] = fs.readFileSync(filepath).toString().trim().split("\n");

  return [Number(N), maxDp.map((str) => str.split(" ").map((n) => Number(n)))];
}

function solve(N, maxDp) {
  // const maxDp = Array(N);
  const minDp = Array(N);

  for (let i = 0; i < N; ++i) {
    if (i === 0) {
      minDp[i] = maxDp[i].slice();
    } else {
      minDp[i] = maxDp[i].slice();
      minDp[i][0] += Math.min(minDp[i - 1][0], minDp[i - 1][1]);
      minDp[i][1] += Math.min(
        minDp[i - 1][0],
        minDp[i - 1][1],
        minDp[i - 1][2]
      );
      minDp[i][2] += Math.min(minDp[i - 1][1], minDp[i - 1][2]);

      maxDp[i][0] += Math.max(maxDp[i - 1][0], maxDp[i - 1][1]);
      maxDp[i][1] += Math.max(
        maxDp[i - 1][0],
        maxDp[i - 1][1],
        maxDp[i - 1][2]
      );
      maxDp[i][2] += Math.max(maxDp[i - 1][1], maxDp[i - 1][2]);
    }
  }
  console.log(Math.max(...maxDp[N - 1]), Math.min(...minDp[N - 1]));
}
