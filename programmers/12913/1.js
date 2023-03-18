function solution(land) {
  const n = land.length;
  const dp = Array.from(Array(n), () => Array(4).fill(0));
  dp[0] = [...land[0]];

  for (let i = 1; i < n; ++i) {
    for (let next = 0; next < 4; ++next) {
      const others = dp[i - 1].filter((_, idx) => idx !== next);
      dp[i][next] = Math.max(...others) + land[i][next];
    }
  }
  return Math.max(...dp[n - 1]);
}
