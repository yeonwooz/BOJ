main();

function main() {
  const s = getInputs();
  solve(s);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const s = fs.readFileSync(filepath).toString().trim();
  return s;
}

function solve(s) {
  let len = s.length;
  const words = [];
  for (let i = 1; i < len - 1; ++i) {
    for (let j = i + 1; j < len; ++j) {
      const a = s.slice(0, i).split("").reverse().join("");
      const b = s.slice(i, j).split("").reverse().join("");
      const c = s.slice(j, len).split("").reverse().join("");
      words.push(a + b + c);
    }
  }
  words.sort(); // 문자열 정렬은 인자 없이 sort 
  console.log(words[0]);
}
