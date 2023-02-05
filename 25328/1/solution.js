const fs = require("fs");
const readline = require("readline");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

try {
  const rl = readline.createInterface({
    input: fs.createReadStream(filepath),
    crlfDelay: Infinity,
  });
  let index = 0;
  let X;
  let Y;
  let Z;
  let k;

  rl.on("line", (line) => {
    if (index === 0) {
      X = line;
    } else if (index === 1) {
      Y = line;
    } else if (index === 2) {
      Z = line;
    } else if (index === 3) {
      k = parseInt(line);
      const arr = solve(X, Y, Z, k);
      if (arr.length === 0) {
        console.log(-1);
      } else {
        arr.forEach((str) => console.log(str));
      }
    }
    index++;
  });
} catch (error) {}

function solve(X, Y, Z, k) {
  const answer = [];
  const cxk = combination(X.split(""), k);
  const map = new Map();
  for (let i = 0; i < cxk.length; ++i) {
    map.set(cxk[i], 1);
  }
  const cyk = combination(Y.split(""), k);

  for (let i = 0; i < cyk.length; ++i) {
    const str = cyk[i];
    if (map.get(str, 1)) {
      answer.push(str);
      map.set(str, 0);
    } else {
      map.set(str, 1);
    }
  }
  const czk = combination(Z.split(""), k);

  for (let i = 0; i < czk.length; ++i) {
    const str = czk[i];
    if (map.get(str, 1)) {
      answer.push(str);
    }
  }

  answer.sort();
  return answer;
}

function combination(arr, num) {
  let result = [];
  if (num === 1) return arr.map((v) => v);

  arr.forEach((value, index, arr) => {
    const fixed = value; // 한자리는 현재값으로 채운다
    const restarr = arr.slice(index + 1); // 현재 값보다 뒤쪽
    const combinationArr = combination(restarr, num - 1); // restarr에서 한자리 제외하고 뽑아오기

    // 합치기
    const combined = combinationArr.map((comb) => fixed + comb);
    result.push(...combined);
  });
  return result;
}
