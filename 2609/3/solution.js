const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = fs.readFileSync(filepath).toString().trim().split(" ");

let gcd = 1;
let lcm = 1;

let i = 1;
while (i <= 10000) {
  if (i > a || i > b) break;
  if (a % i == 0 && b % i == 0) gcd = i;
  lcm = gcd * (a / gcd) * (b / gcd);
  ++i;
}
console.log(gcd + "\n" + lcm);
