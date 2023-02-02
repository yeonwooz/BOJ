function solution(n) {
  return fibo(n) % 1234567;
}

function fibo(n) {
  const dp = Array(n).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
    dp[i] %= 1234567;
  }
  return dp[n];
}
