main();

function main() {
  const [N, M, arr2] = getInputs();
  const arr1 = [];
  for (let i = 0; i < N; ++i) {
    arr1.push(arr2.shift());
  }
  solve(
    N,
    M,
    arr1.map((n) => +n),
    arr2.map((n) => +n)
  );
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  let [meta, ...inputs] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");
  meta = meta.split(" ");
  inputs.pop();
  return [+meta[0], +meta[1], inputs];
}

function solve(N, M, arr1, arr2) {
  let cnt = 0;
  if (N >= M) {
    const set1 = new Set(arr1);
    for (let i = 0; i < M; ++i) {
      if (set1.has(arr2[i])) ++cnt;
    }
  } else {
    const set2 = new Set(arr2);
    for (let i = 0; i < N; ++i) {
      if (set2.has(arr1[i])) ++cnt;
    }
  }
  console.log(cnt);
}
