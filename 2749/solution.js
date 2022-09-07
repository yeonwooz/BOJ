main();

function main() {
  const n = getInputs();
  console.log(solve(n));
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const n = fs.readFileSync(filepath).toString().trim();
  return BigInt(n);
}

function solve(n) {
  // n이 2^53보다 큰 값으로 들어올 수 있어서 BigInt 자료형 사용
  let dp = [0n, 1n];
  
  //  피사노주기 규칙(9471번 참고) : n > 2라면, k(10n) = 15×10(n-1)
  for (let i = 2; i < 1500000; ++i) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000n;
  }
  return dp[n % 1500000n].toString();
}
