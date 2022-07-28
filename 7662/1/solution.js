main();

function main() {
  const arrs = init();
  for (let i = 0; i < arrs.length; ++i) {
    solve(arrs[i]);
  }
}

function init() {
  const fs = require("fs");
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [N, ...inputs] = fs.readFileSync(path).toString().trim().split("\n");
  N = parseInt(N);
  let arr = new Array(N);
  for (let i = 0; i < N; ++i) {
    arr[i] = [];
  }
  let idx = 0;

  let i = 0;
  while (i < inputs.length) {
    if (inputs[i].length === 1) {
      for (let j = i + 1; j <= i + parseInt(inputs[i]); ++j) {
        arr[idx].push(inputs[j]);
      }
      i = i + parseInt(inputs[i]) + 1;
      ++idx;
    } else ++i;
  }
  return arr;
}

function solve(arr) {
    // console.log("====")
  const Q = [];
  for (let i = 0; i < arr.length; ++i) {
    // console.log(Q);
    let [cmd, num] = arr[i].split(" ");
    num = parseInt(num);
    switch (cmd) {
      case "I":
        Q.push(num);
        break;
      case "D":
        if (Q.length === 0) {
          continue;
        }
        if (num === 1) {
          Q.pop();
        } else if (num === -1) {
          Q.shift();
        }
        break;
    }
    Q.sort((a, b) => a - b);
  }

//   console.log(Q);
  if (Q.length === 0) {
    console.log("EMPTY");
    return;
  }
  let answer = [Q[Q.length - 1], Q[0]]
  console.log(answer.join(" "));
}
