function solution(sequence) {
  let max = 0;
  let pulse1 = 1;
  let pulse2 = -1;

  const n = sequence.length;
  const dp1 = Array(n).fill(0);
  const dp2 = Array(n).fill(0);
  dp1[0] = sequence[0] * pulse1;
  pulse1 *= -1;

  dp2[0] = sequence[0] * pulse2;
  pulse2 *= -1;

  for (let i = 1; i < n; ++i) {
    dp1[i] = Math.max(dp1[i - 1], 0) + sequence[i] * pulse1;
    pulse1 *= -1;

    dp2[i] = Math.max(dp2[i - 1], 0) + sequence[i] * pulse2;
    pulse2 *= -1;
  }

  return Math.max(...dp1, ...dp2);
}
