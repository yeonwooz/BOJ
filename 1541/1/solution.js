function main() {
  const str = getInputs();
  const arr = [];
  let num = 0;
  for (let c of str) {
    if (c === "-" || c === "+") {
      arr.push(num);
      arr.push(c);
      num = 0;
    } else {
      num = num * 10 + parseInt(c);
    }
  }
  arr.push(num);
  solve(arr);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim();
  return inputs;
}

function solve(arr) {
  let answer = 0;
  let minus_cnt = 0;
  let loop = arr.length;
  for (let i = 0; i < loop; ++i) {
    let pop = arr.shift();
    if (pop === "+") continue;
    if (pop === "-") {
      ++minus_cnt;
      continue;
    }
    if (minus_cnt === 1) {
      answer -= pop;
    } else answer += pop;
  }
  console.log(answer);
}

main();
