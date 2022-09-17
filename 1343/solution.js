const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const str = fs.readFileSync(filepath).toString().trim();
console.log(solve(str));

function solve(str) {
  str = str.replace(/XXXX/g, "AAAA");
  str = str.replace(/XX/g, "BB");
  return str.split("").includes("X") ? -1 : str;
}

// https://junghyeonsu.tistory.com/260 참고
