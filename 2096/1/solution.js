main();

function main() {
  const [N, inputs] = getInputs();
  solve(N, inputs);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, ...inputs] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");

  return [N, inputs];
}

function solve(N, inputs) {
  const maxDp = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  const minDp = [
    [0, 0, 0],
    [0, 0, 0],
  ];

  let row = 0;
  for (let i = 0; i < Number(N); ++i) {
    let [x, y, z] = inputs[i].split(" ");

    maxDp[row][0] = Math.max(maxDp[1 - row][0], maxDp[1 - row][1]) + Number(x);
    maxDp[row][1] =
      Math.max(maxDp[1 - row][0], maxDp[1 - row][1], maxDp[1 - row][2]) +
      Number(y);
    maxDp[row][2] = Math.max(maxDp[1 - row][1], maxDp[1 - row][2]) + Number(z);

    minDp[row][0] = Math.min(minDp[1 - row][0], minDp[1 - row][1]) + Number(x);
    minDp[row][1] =
      Math.min(minDp[1 - row][0], minDp[1 - row][1], minDp[1 - row][2]) +
      Number(y);
    minDp[row][2] = Math.min(minDp[1 - row][1], minDp[1 - row][2]) + Number(z);
    row = 1 - row;
  }
  console.log(Math.max(...maxDp[1 - row]), Math.min(...minDp[1 - row]));
}
