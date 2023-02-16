function solution(N, stages) {
  /*
    멈춰있는 스테이지 : stages = [2, 1, 2, 6, 2, 4, 3, 3]
    // i번째에 대해, stages[i] 이상인 사람들 분에 stages[i]인 사람들 명수
    */
  const userCnt = stages.length;
  const userMap = new Map();
  for (let i = 0; i < stages.length; ++i) {
    if (!userMap.get(stages[i])) {
      userMap.set(stages[i], 1);
    } else {
      userMap.set(stages[i], userMap.get(stages[i]) + 1);
    }
  }
  const rateMap = new Map();

  let prevStageUsersCnt = 0;
  for (let stageNum = 1; stageNum <= N; ++stageNum) {
    const curStageUserCnt = userMap.get(stageNum) || 0;
    const stageWinnersCnt = userCnt - (curStageUserCnt + prevStageUsersCnt);

    if (!stageWinnersCnt) {
      rateMap.set(stageNum, 1);
      continue;
    }
    const stageChallengersCnt = curStageUserCnt + stageWinnersCnt;

    const failRate =
      stageChallengersCnt === 0 ? 0 : curStageUserCnt / stageChallengersCnt;
    rateMap.set(stageNum, failRate);
    prevStageUsersCnt += curStageUserCnt;
  }

  const answer = Array.from(rateMap.entries());

  answer.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] === b[1]) {
      if (a[0] < b[0]) return -1;
      return 1;
    }
    return 1;
  });

  return answer.map((v) => v[0]);
}
