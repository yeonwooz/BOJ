const inputs = getInputs();
const N = inputs[0];
const K = inputs[1];

solve(N, K);

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split(" ");
  return inputs.map((num) => parseInt(num));
}

function solve(N, K) {
  let answer = "";
  let circle = Object.keys(new Array(N).fill()).map((num) => parseInt(num) + 1);
  let idx = -1;
  let people = N;
  while (people > 0) {
    let cnt = K;
    while (cnt > 0) {
      ++idx;
      idx %= N;
      if (circle[idx] > 0) --cnt;
    }
    answer += circle[idx];
    if (people > 1) answer += ", "; // answer 문자열 합칠 때 split, join 사용하면 두자리 수 이상에서 문제가 생길 수 있다. 주의할 것
    circle[idx] = 0;
    --people;
  }
  console.log("<" + answer + ">");
}
