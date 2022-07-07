const inputs = getInputs();
inputs.pop();
printResult(inputs);

function getInputs() {
  const fs = require("fs");
  const inputs = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");
  return inputs;
}

function printResult(sentences) {
  let answer = "";
  for (let i = 0; i < sentences.length; ++i) {
    answer += solve(sentences[i]) + "\n";
  }
  console.log(answer);
}

function solve(str) {
  const stack = [];

  let i = 0;
  while (str[i]) {
    const len = stack.length;
    if (str[i] == "(") {
      stack.push("(");
    } else if (str[i] == ")") {
      if (len == 0) return "no";
      if (stack[len - 1] == "[") return "no";
      stack.pop();
    } else if (str[i] == "[") {
      stack.push("[");
    } else if (str[i] == "]") {
      if (len == 0) return "no";
      if (stack[len - 1] == "(") return "no";
      stack.pop();
    }
    ++i;
  }
  if (stack.length == 0) return "yes";
  return "no";
}
