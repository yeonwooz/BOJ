function solution(storey) {
  let factor = storey.toString().length - 1; // storey 2자리수 -> factor는 1
  const top = Math.pow(10, factor + 1);
  const dp = Array(top + 1).fill(Infinity);
  dp[storey] = 0;

  while (factor >= 0) {
    const btn = Math.pow(10, factor);

    for (let i = storey; i <= top; ++i) {
      dp[i + btn] = Math.min(dp[i] + 1, dp[i + btn]);
      // console.log(dp[i + btn])
    }

    for (let i = top; i >= 0; i--) {
      if (i < btn) break;
      dp[i - btn] = Math.min(dp[i] + 1, dp[i - btn]);
    }
    factor--;
  }

  return dp[0];
}
