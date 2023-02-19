function solution(alp, cop, problems) {
  let alpGoal = 0;
  let copGoal = 0;
  for (let i = 0; i < problems.length; ++i) {
    const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
    if (alpGoal < alp_req) alpGoal = alp_req;
    if (copGoal < cop_req) copGoal = cop_req;
  }
  if (alp > alpGoal) alp = alpGoal;
  if (cop > copGoal) cop = copGoal;

  const costsDP = Array.from(new Array(151), () =>
    new Array(151).fill(Infinity)
  );
  costsDP[alp][cop] = 0;

  for (let i = alp; i <= alpGoal; i++) {
    for (let j = cop; j <= copGoal; j++) {
      if (i == alpGoal && j == copGoal) break;

      if (i < alpGoal) {
        costsDP[i + 1][j] = Math.min(costsDP[i + 1][j], costsDP[i][j] + 1);
      }

      if (j < copGoal) {
        costsDP[i][j + 1] = Math.min(costsDP[i][j + 1], costsDP[i][j] + 1);
      }

      for (let num = 0; num < problems.length; num++) {
        const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[num];

        if (i >= alp_req && j >= cop_req) {
          // 풀 수 있다면
          const alpSum = i + alp_rwd;
          const copSum = j + cop_rwd;

          const point = costsDP[i][j] + cost;
          if (alpSum >= alpGoal && copSum >= copGoal) {
            // 둘다 만족하게 되었다면
            // 기존 비용과, i,j능력치를 가지고 cost시간만큼 푼 비용 비교
            costsDP[alpGoal][copGoal] = Math.min(
              costsDP[alpGoal][copGoal],
              point
            );
          } else if (alpSum >= alpGoal) {
            // 알고력만 만족하게 되었다면
            costsDP[alpGoal][j + cop_rwd] = Math.min(
              costsDP[alpGoal][j + cop_rwd],
              point
            );
          } else if (copSum >= copGoal) {
            // 코딩력만 만족하게 되었다면
            costsDP[i + alp_rwd][copGoal] = Math.min(
              costsDP[i + alp_rwd][copGoal],
              point
            );
          } else {
            // 둘다 목표에 도달하지 못했음
            costsDP[i + alp_rwd][j + cop_rwd] = Math.min(
              costsDP[i + alp_rwd][j + cop_rwd],
              point
            );
          }
        }
      }
    }
  }
  return costsDP[alpGoal][copGoal];
}
