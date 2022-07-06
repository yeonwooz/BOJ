function init() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
  // readFile : 비동기 (파일 불러오기가 오래걸리면 다음 라인 먼저 실행)
  // readFileSync : 동기 (불러온 다음에 다음 라인 실행)
  const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
  const n = inputs[0];
  inputs.shift();
  solve(n, inputs);
}

function solve(n, seq) {
  let i = 0;
  let num = 1;
  const stack = [];
  const result = [];
  while (1) {
    const len = stack.length;
    if (len === 0 || stack[len - 1] < parseInt(seq[i])) {
      stack.push(num++);
      result.push("+");
    } else if (stack[len - 1] === parseInt(seq[i])) {
      stack.pop();
      result.push("-");
      ++i;
    } else {
      console.log("NO");
      return;
    }
    if (result.length == n * 2) break;
  }

  for (let i = 0; i < result.length; ++i) {
    console.log(result[i]);
  }
}
// console.time("func");
init();
// console.timeEnd("func");
