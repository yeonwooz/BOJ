main();

function main() {
  let [T, inputs] = getInputs();

  while (T > 0) {
    const [N, M] = inputs[0].split(" ").map((n) => Number(n));
    inputs.shift();
    for (let i = 0; i < M; ++i) {
      inputs.shift();
    }
    solve(N);
    --T;
  }
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [T, ...inputs] = fs.readFileSync(filepath).toString().trim().split("\n");
  T = Number(T);
  return [T, inputs];
}

function solve(N) {
  console.log(N - 1);
}
