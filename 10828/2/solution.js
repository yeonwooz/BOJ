function init() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
  const n = inputs.shift();
  solve(n, inputs);
}

function solve(n, cmds) {
  const stack = [];
  let top_idx = -1;
  let answer = "";
  for (let i = 0; i < n; ++i) {
    switch (cmds[i]) {
      case "pop":
        const popped = pop(stack);
        if (popped > 0) --top_idx;
        answer += " " + popped;
        break;
      case "size":
        answer += " " + size(top_idx);
        break;
      case "empty":
        answer += " " + empty(stack);
        break;
      case "top":
        answer += " " + top(stack, top_idx);
        break;
      default:
        const num = parseInt(cmds[i].slice(5));
        push(stack, num);
        ++top_idx;
    }
  }
  answer = answer.trim().split(" ").join("\n");   // console.log 시간이 오래걸려서 마지막에 한번만 수행
  console.log(answer);
}

const pop = (stack) => {
  if (empty(stack)) return -1;
  return stack.pop();
};
const size = (top_idx) => {
  return top_idx + 1;
};
const empty = (stack) => {
  if (stack[0] > 0) return 0;
  return 1;
};
const top = (stack, top_idx) => {
  if (empty(stack)) return -1;
  return stack[top_idx];
};
const push = (stack, num) => {
  stack.push(num);
};

init();
