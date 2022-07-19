let b_cnt = 0;
let w_cnt = 0;

function main() {
  let arr = getInputs();
  const n = parseInt(arr.shift());
  arr = arr.map((row) => row.split(" ").map((num) => parseInt(num)));
  solve(0, 0, n, arr);
  console.log(w_cnt + "\n" + b_cnt);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(x, y, n, arr) {
  let color = arr[x][y];
  for (let i = x; i < x + n; ++i) {
    for (let j = y; j < y + n; ++j) {
      if (arr[i][j] != color) {
        solve(x, y, n / 2, arr);
        solve(x, y + n / 2, n / 2, arr);
        solve(x + n / 2, y, n / 2, arr);
        solve(x + n / 2, y + n / 2, n / 2, arr);
        return;
      }
    }
  }
  if (color == 0) w_cnt++;
  else b_cnt++;
}

main();
