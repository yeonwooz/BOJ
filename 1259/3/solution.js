const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop(); // 마지막으로 들어온 인풋 제거

for (let i = 0; i < input.length; ++i) {
  const reversed = input[i].split("").reverse().join("");
  console.log(input[i] == reversed ? "yes" : "no");
}
