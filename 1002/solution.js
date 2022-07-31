main();
function main() {
  const [T, arr] = getInputs();
  //   console.log(T, inputs);
  for (let i = 0; i < T; ++i) {
    solve(arr[i]);
  }
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [T, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");
  T = Number(T);
  arr = arr.map((row) => row.split(" ").map((n) => Number(n)));
  return [T, arr];
}

function solve(row) {
  const [x1, y1, r1, x2, y2, r2] = row;
  let xd = x1 - x2;
  if (xd < 0) xd *= -1;
  let yd = y1 - y2;
  if (yd < 0) yd *= -1;
  const d = Math.sqrt(Math.pow(xd, 2) + Math.pow(yd, 2));

  console.log(judge(d, r1, r2));
}

function judge(d, r1, r2) {
  let rsum = r1 + r2;
  let rdiff = r1 - r2;
  if (rdiff < 0) rdiff *= -1;

  if (d == 0) {
    if (r1 === r2) return -1;
    return 0;
  }
  if (rdiff === d) return 1;
  if (rsum === d) return 1;
  if (d < rdiff) return 0;
  if (d > rsum) return 0;
  if (rdiff < d < rsum) return 2;
}
