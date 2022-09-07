main();

function main() {
  const [P, cases] = getInputs();
  const answer = [];
  for (let i = 0; i < P; ++i) {
    const item = cases[i];
    answer.push(Number(item[0]) + " " + solve(Number(item[1])));
  }
  console.log(answer.join("\n"));
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [P, ...cases] = fs.readFileSync(filepath).toString().trim().split("\n");
  return [+P, cases.map((str) => str.split(" "))];
}

function solve(M) {
  let cnt = 0;
  let x = 1;
  let y = 1;
  while (true) {
    let z = (x + y) % M;  
    x = y; // x를 오른쪽으로 한칸 이동
    y = z; // y를 오른쪽으로 한칸 이동 (앞의 두수를 더한 값에 대해 나머지연산)
    cnt++;

    if ((x === 1) & (y === 1)) break;
    // 피보나치값이 연속으로 1,1이 나오면 주기 발생
  }

  return cnt;
}
