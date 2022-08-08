main();

function main() {
  const [N, M, dummies] = getInputs();
  console.log(solve(N, M, dummies) ? "Yes" : "No");
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

  let N;
  let M;
  let dummies = [];
  for (let i = 0; i < inputs.length; ++i) {
    if (i === 0) {
      N = +inputs[i][0];
      M = +inputs[i][2];
    } else if (i % 2 == 0) {
      dummies.push(inputs[i].split(" ").map((n) => Number(n)));
    }
  }

  return [N, M, dummies];
}

function solve(N, M, dummies) {
  let answer = true;
  for (let i = 0; i < M; ++i) {
    let len = dummies[i].length;
    for (let j = 0; j < len - 1; ++j) {
      if (dummies[i][j] < dummies[i][j + 1]) {
        answer = false;
        break;
      }
      if (!answer) break;
    }
  }
  return answer;
}
