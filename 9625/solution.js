main();

function main() {
  const N = getInputs();
  solve(N);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const N = fs.readFileSync(filepath).toString().trim();
  return Number(N);
}

function solve(N) {
  let letter = new Array(N + 1);
  for (let i = 0; i < N + 1; ++i) {
    letter[i] = new Array(2).fill(0);
  }
  letter[0] = [1, 0];
  letter[1] = [0, 1];

  for (let i = 2; i <= N; ++i) {
    letter[i][0] = letter[i - 1][0] + letter[i - 2][0];
    letter[i][1] = letter[i - 1][1] + letter[i - 2][1];
  }

  console.log(letter[N].join(" "));
}
