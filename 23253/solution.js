const { Console } = require("console");

main();

function main() {
  const [N, M, dummies] = getInputs();
  console.log(solve(N, M, dummies));
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
  let book = 1;
  while (book < N + 1) {
    let popped = false;
    for (let i = 0; i < M; ++i) {
      const top = dummies[i].pop();
      if (book === top) {
        popped = true;
        break;
      } else {
        dummies[i].push(top);
      }
    }
    if (!popped) return "No";
    ++book;
  }
  if (book === N + 1) {
    return "Yes";
  }
}
