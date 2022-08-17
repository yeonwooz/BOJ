main();

function main() {
  const [N, K] = getInputs();
  solve(N, K);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, K] = fs.readFileSync(filepath).toString().trim().split("\n");
  return [+N, +K];
}

function solve(N, K) {
  let cnt = 0;
  for (let i = 1; i <= N; ++i) {
    let now = i;
    let max = 0;

    let j = 2;
    while (j <= Math.floor(Math.sqrt(i))) {
      if (now % j === 0) {
        now /= j;
        max = j;
      } else {
        ++j;
      }
    }

    if (now != 1) max = now;
    if (max <= K) cnt++;
  }
  console.log(cnt);
}
