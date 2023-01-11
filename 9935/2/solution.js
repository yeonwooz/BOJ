main();
function main() {
  const [s, boom] = getInputs();
  solve(s, boom);
}
function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [s, boom] = fs.readFileSync(filepath).toString().trim().split("\n");

  return [s, boom];
}

function solve(str, str2) {
  const stack = [];

  for (let i = str.length - 1; i >= 0; i--) {
    stack.push(str[i]);

    if (stack.length >= str2.length && stack[stack.length - 1] === str2[0]) {
      for (let j = 1; j < str2.length; j++) {
        if (stack[stack.length - 1 - j] !== str2[j]) {
          continue;
        }
      }

      for (let j = 0; j < str2.length; j++) {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    console.log("FRULA");
  } else {
    console.log(stack.reverse().join(""));
  }
}
