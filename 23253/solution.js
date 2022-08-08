main();

function main() {
  const inputs = getInputs();
  console.log(solve(inputs) ? "Yes" : "No");
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(inputs) {
  const [N, M] = inputs.shift().split(" ");

  let answer = true;
  for (let i = 0; i < +M; ++i) {
    const arr = inputs[i * 2 + 1].split(" ");
    for (let j = 0; j < arr.length - 1; ++j) {
      if (+arr[j] < +arr[j + 1]) {
        return false;
      }
    }
  }
  return answer;
}
