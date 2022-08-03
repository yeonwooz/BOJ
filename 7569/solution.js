main();

function main() {
  let [meta, serialized] = getInputs();
  //   console.log(arr)
  const M = meta[0];
  const N = meta[1];
  const H = meta[2];
  let idx = 0;
  let box = new Array(H);
  for (
    let i = 0;
    i < H;
    ++i // 높이
  ) {
    box[i] = new Array(N);
    for (
      let j = 0;
      j < N;
      ++j // row
    ) {
      box[i][j] = new Array(M);
      for (
        let k = 0;
        k < M;
        ++k // col
      ) {
        box[i][j][k] = serialized[idx++];
        console.log(box[i][j][k]);
      }
    }
  }

  solve(M, N, H, box);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [meta, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");
  meta = meta.split(" ").map((n) => Number(n));

  let serialized = [];
  arr = arr.map((row) => row.split(" ").map((n) => Number(n)));
  let rows = arr.length;
  let cols = arr[0].length;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      serialized.push(arr[i][j]);
    }
  }
  return [meta, serialized];
}

function solve(M, N, H, box) {
  for (
    let i = 0;
    i < H;
    ++i // 높이
  ) {
    for (
      let j = 0;
      j < N;
      ++j // row
    ) {
      for (
        let k = 0;
        k < M;
        ++k // col
      ) {}
    }
  }
}
