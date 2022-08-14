main();

function main() {
  const [N, M, strs] = getInputs();

  solve(N, M, strs);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [meta, ...strs] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");
  const [N, M] = meta.split(" ").map((n) => +n);
  return [N, M, strs];
}

function solve(N, M, strs) {
  let answer = "";
  let hdsum = 0;
  for (let i = 0; i < M; ++i) {
    const map = new Map();
    for (let j = 0; j < N; ++j) {
      if (!map.get(strs[j][i])) {
        map.set(strs[j][i], 1);
      } else {
        map.set(strs[j][i], map.get(strs[j][i]) + 1);
      }
    }
    let digit = "";
    let max = 0;
    for (let [key, value] of map) {
      if (value > max) {
        digit = key;
        max = value;
      } else if (value === max) {
        if (key < digit) {
          digit = key;
        }
      }
    }
    answer += digit;
    hdsum += N - max;
  }
  console.log(answer);
  console.log(hdsum);
}
