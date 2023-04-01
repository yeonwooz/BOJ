// https://school.programmers.co.kr/questions/46214?referer=collection-of-questions 참고

function solution(picks, minerals) {
  const table = {
    dia: {
      diamond: 1,
      iron: 1,
      stone: 1,
    },
    iron: {
      diamond: 5,
      iron: 1,
      stone: 1,
    },
    stone: {
      diamond: 25,
      iron: 5,
      stone: 1,
    },
  };
  const tools = ["dia", "iron", "stone"];
  const result = [];

  function recur(picks, arr, count) {
    if (picks.every(el => el === 0)) return result.push(count); // 곡괭이 개수 0이면 리턴

    for (let i = 0; i < picks.length; ++i) {
      if (picks[i]) {
        const tempPick = [...picks];
        const tempMinerals = [...arr];
        let tempCnt = count;

        let cnt = 0;
        while (cnt < 5 && tempMinerals.length) {
          const target = tempMinerals.shift();
          tempCnt += table[tools[i]][target];
          cnt++;
        }
        if (tempMinerals.length === 0) return result.push(tempCnt);
        tempPick[i]--;
        recur(tempPick, tempMinerals, tempCnt);
      }
    }
  }
  recur(picks, minerals, 0);
  return Math.min(...result);
}
