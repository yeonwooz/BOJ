function solution(alp, cop, problems) {
  // let sorted = [...problems]
  // const alpGoal = sorted.sort((a,b)=>b[0]-a[0])[0][0]
  // const copGoal = sorted.sort((a,b)=>b[1]-a[1])[0][1]
  // console.log(alpGoal, copGoal)
  let alpGoal = 0;
  let copGoal = 0;

  const alpCosts = Array.from(Array(21), (x, i) => i); // 알고력 i점을 얻기 위해 드는 최소시간
  const copCosts = Array.from(Array(21), (x, i) => i); // 코딩력 i점을 얻기 위해 드는 최소시간

  for (let i = 0; i < problems.length; ++i) {
    const num = i + 1;
    const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
    if (alpGoal < alp_req) alpGoal = alp_req;
    if (copGoal < cop_req) copGoal = cop_req;
    let d = 1;
    while (alp_rwd > cost && alp_rwd * d <= alpGoal) {
      alpCosts[alp_rwd * d] = Math.min(alpCosts[alp_rwd * d], cost * d);
      d++;
    }
    d = 1;
    while (cop_rwd > cost && cop_rwd * d <= copGoal) {
      copCosts[cop_rwd * d] = Math.min(copCosts[cop_rwd * d], cost * d);
      d++;
    }
  }
  console.log(alpCosts);
  console.log(copCosts);
}
