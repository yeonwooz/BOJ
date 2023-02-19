function solution(alp, cop, problems) {
  let alpGoal = 0;
  let copGoal = 0;

  const costsDP = Array.from(Array(21), () => Array(21).fill(Infinity));
  // 알고력 i점, 코딩력 j점을 얻기 위해 드는 최소시간

  for (let i = 0; i < problems.length; ++i) {
    const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
    if (alpGoal < alp_req) alpGoal = alp_req;
    if (copGoal < cop_req) copGoal = cop_req;
    let m = 1;
    while (alp_rwd * m <= alpGoal || cop_rwd * m <= copGoal) {
      if (alp_rwd * m <= alpGoal && cop_rwd * m <= copGoal) {
        costsDP[alp_rwd * m][cop_rwd * m] = Math.min(
          costsDP[alp_rwd * m][cop_rwd * m],
          cost * m
        );
      } else if (cop_rwd * m > copGoal) {
        for (let x = 1; x <= copGoal; ++x) {
          costsDP[alp_rwd * m][x] = Math.min(costsDP[alp_rwd * m][x], cost * m);
        }
      } else if (alp_rwd * m > alpGoal) {
        for (let x = 1; x <= alpGoal; ++x) {
          costsDP[x][cop_rwd * m] = Math.min(costsDP[x][cop_rwd * m], cost * m);
        }
      }
      m++;
    }
  }

  for (let a = 1; a <= alpGoal; ++a) {
    for (let b = 1; b <= copGoal; ++b) {
      costsDP[a][b] = Math.min(costsDP[a][b], Math.max(a, b));
    }
  }

  console.log(costsDP);
  return costsDP[alpGoal][copGoal];
}
