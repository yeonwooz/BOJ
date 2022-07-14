function main() {
  const inputs = getInputs();
  const meta = inputs.shift();
  solve(meta, inputs);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(meta, arr) {
  //   console.log(meta, arr);

  const [N, M] = meta.split(" ").map((num) => parseInt(num));
  //   console.log(N, M, typeof N, typeof M);
  const board = Array.from(Array(N), () => new Array(M).fill(0));
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < M; ++j) {
      board[i][j] = arr[i][j];
    }
  }

  let cnt = N * M;
  for (let last_i = 7; last_i < N; ++last_i) {
    for (let last_j = 7; last_j < M; ++last_j) {
      let start_i = last_i - 7;
      let start_j = last_j - 7;

      let swap_cnt_1 = 0;
      let swap_cnt_2 = 0;
      for (let i = start_i; i <= last_i; ++i) {
        for (let j = start_j; j <= last_j; ++j) {
          if (
            (i % 2 == j % 2 && arr[i][j] == "B") ||
            (i % 2 != j % 2 && arr[i][j] == "W")
          )
            ++swap_cnt_1;
          else if (
            (i % 2 == j % 2 && arr[i][j] == "W") ||
            (i % 2 != j % 2 && arr[i][j] == "B")
          )
            ++swap_cnt_2;
        }
      }
      const min_swap_cnt = MIN(swap_cnt_1, swap_cnt_2);
      cnt = MIN(cnt, min_swap_cnt);
    }
  }
  console.log(cnt);
}

function MIN(a, b) {
  return a < b ? a : b;
}

main();
