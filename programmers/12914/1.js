function solution(n) {
  const dp = [0, 1, 2, ...Array(1998).fill(0)];
  for (let i = 3; i <= n; ++i) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }
  return dp[n] % 1234567;
}
