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
  let letter = ["A", "B"];
  for (let i = 2; i <= N; ++i) {
    letter[i] = letter[i - 1] + letter[i - 2];
  }

  let str = letter[N];

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "A") cnts[0]++;
    else cnts[1]++;
  }
  console.log(cnts.join(" "));
}
