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
    let len = inputs[i * 2 + 1].length;
    for (let j = 0; j < len - 1; ++j) {
        const arr = inputs[i * 2 + 1].split(" ");
      if (+arr[j] < +arr[j + 1]) {
        return false;
      }
    }
  }
  return answer;
}
