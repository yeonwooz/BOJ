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

  let answer = Infinity;

  for (const perm of permutation(["dia", "iron", "stone"], 3)) {
    let cnt = 0;
    const tools = perm;
    let lastIdx = 0;
    for (let i = 0; i < 3; ++i) {
      const tool = tools[i];
      let toolCnt = picks[i];
      let mineralCnt = 0;
      for (let j = lastIdx; j < minerals.length; ++j) {
        if (mineralCnt === 5) {
          toolCnt--;
          mineralCnt = 0;
        }
        if (toolCnt === 0) {
          lastIdx = j;
          break;
        }
        const curMineral = minerals[j];
        cnt += table[tool][curMineral];
        mineralCnt++;
        if (j + 1 === minerals.length) {
          lastIdx = j + 1;
        }
      }
    }
    answer = Math.min(cnt, answer);
  }

  return answer;
}

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map(v => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map(v => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}
