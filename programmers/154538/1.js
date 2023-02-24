function solution(x, y, n) {
  const dp = Array(3000001).fill(Infinity);
  dp[y] = 0;
  for (let i = y; i >= x; --i) {
    const case1 = dp[i + n] + 1;
    const case2 = dp[i * 2] + 1;
    const case3 = dp[i * 3] + 1;
    const minCase = Math.min(case1, case2, case3);
    if (minCase !== Infinity) dp[i] = minCase;
  }

  return dp[x] === Infinity ? -1 : dp[x];
}
