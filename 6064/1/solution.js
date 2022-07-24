function main() {
  const inputs = getInputs();
  const T = inputs.shift();
  const cases = inputs.map((str) => str.split(" ").map((num) => parseInt(num)));
  for (let i = 0; i < T; ++i) {
    solve(cases[i]);
  }
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(data) {
  const [M, N, x, y] = data;
  let k = 1;
  let mi = 0;
  let ni = 0;
  while (1) {
    if (k - M * mi === M && k - N * ni === N) {
      console.log(-1);
      break;
    }
    if (k - M * mi === x && k - N * ni === y) {
      console.log(k);
      break;
    }
    ++k;
    if ((k-1) % M === 0) ++mi;
    if ((k-1) % N === 0) ++ni;
  }
}

main();
