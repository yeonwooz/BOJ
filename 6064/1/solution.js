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
  const gcd = getgcd(M, N);
  const lcm = gcd * (M / gcd) * (N / gcd);

  for (let k = x; k <= lcm; k += M) {
    let temp = k % N === 0 ? N : k % N;
    if (temp === y) {
      console.log(k);
      return;
    }
  }
  console.log(-1);
  return;
}

function getgcd(M, N) {
  let gcd = Math.min(M, N);
  while (gcd > 1) {
    if (M % gcd === 0 && N % gcd === 0) break;
    --gcd;
  }
  return gcd;
}

main();
