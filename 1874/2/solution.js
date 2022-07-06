function init() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
  // readFile : 비동기 (파일 불러오기가 오래걸리면 다음 라인 먼저 실행)
  // readFileSync : 동기 (불러온 다음에 다음 라인 실행)
  const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
  const n = inputs[0];
  inputs.shift();
  const numbers = inputs.map((i) => parseInt(i));
  solve(n, numbers);
}

function solve(n, seq) {
  let answer = "";
  const stack = [];
  let num = 1;

  for (let i = 0; i < n; ++i) {
    const target = seq.shift();
    while (num <= target) {
      stack.push(num++);
      answer += "+ ";
    }
    const popped = stack.pop();
    if (popped != target) {
      console.log("NO");
      return;
    }
    answer += "- ";
  }

  answer = answer.split(" ").join("\n");
  console.log(answer);
}

init();
