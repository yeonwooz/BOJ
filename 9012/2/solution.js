const inputs = getInputs();
const T = inputs.shift();
printResult(T, inputs);

function getInputs() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
  const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
  return inputs;
}

function printResult(T, inputs) {
  for (let i = 0; i < T; ++i) {
    const result = solve(inputs[i]);
    console.log(result);
  }
}

function solve(ps) {
  const stack = [];
  let i = 0;
  const len = ps.length;
  let top = -1;
  while (ps[i]) {
    if (ps[i] === "(") {
      if (top >= len - 1) return "NO";
      stack.push(ps[i]);
      ++top;
    } else {
      if (top <= -1) return "NO";
      stack.pop();
      --top;
    }
    ++i;
  }
  if (i === len && top === -1) return "YES";
  else return "NO";
}
