function solution(alp, cop, problems) {
  let sorted = [...problems];
  const alpGoal = sorted.sort((a, b) => b[0] - a[0])[0][0];
  const copGoal = sorted.sort((a, b) => b[1] - a[1])[0][1];

  const costsDP = Array.from(Array(alpGoal + 1), () =>
    Array(copGoal + 1).fill(Infinity)
  );
  // 알고력 i점, 코딩력 j점을 얻기 위해 드는 최소시간

  for (let i = 0; i < problems.length; ++i) {
    const num = i + 1;
    const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
    let m = 1;
    while (alp_rwd * m <= alpGoal && cop_rwd * m <= copGoal) {
      costsDP[alp_rwd * m][cop_rwd * m] = Math.min(
        costsDP[alp_rwd * m][cop_rwd * m],
        cost * m
      );
      m++;
    }

    for (let a = 1; a <= alpGoal; ++a) {
      for (let b = 1; b <= copGoal; ++b) {
        costsDP[a][b] = Math.min(costsDP[a][b], Math.max(a, b));
      }
    }
  }
  return costsDP[alpGoal][copGoal];
}
