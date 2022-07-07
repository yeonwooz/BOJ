const inputs = getInput();
const N = inputs.shift();
printResult(N, inputs);

function getInput() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
  return inputs;
}

function printResult(N, inputs) {
  let answer = "";
  const stack = [];

  for (let i = 0; i < N; ++i) {
    const cmd = inputs[i];
    const result = solve(stack, cmd);
    if (result != undefined) answer += result + "\n";
  }
  console.log(answer);
}

function solve(stack, cmd) {
  const len = stack.length;

  if (cmd.slice(0, 10) === "push_front") {
    let num = cmd.slice(11);
    stack.unshift(num);
  } else if (cmd.slice(0, 9) === "push_back") {
    let num = cmd.slice(10);
    stack.push(num);
  } else if (cmd === "pop_front") {
    return stack.shift() ?? -1;
  } else if (cmd === "pop_back") {
    return stack.pop() ?? -1;
  } else if (cmd === "size") {
    return len;
  } else if (cmd === "empty") {
    return len === 0 ? 1 : 0;
  } else if (cmd === "front") {
    return len === 0 ? -1 : stack[0];
  } else if (cmd === "back") {
    return len === 0 ? -1 : stack[len - 1];
  }
}
