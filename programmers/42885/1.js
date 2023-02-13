function solution(people, limit) {
  const idxArr = people.map((_, idx) => idx);
  function combination(arr, num) {
    const result = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((value, index, arr) => {
      const fixed = value;
      const restArr = arr.slice(index + 1);
      const combinationArr = combination(restArr, num - 1);
      let combined = combinationArr
        .map((v) => [fixed, ...v])
        .filter((comb) => {
          return (
            comb.reduce((prevSum, curI) => prevSum + people[curI], 0) <= limit
          );
        });
      if (combined.length) result.push(...combined);
    });
    return result;
  }
  const peopleLen = people.length;

  const combs = combination(idxArr, 2);
  if (combs.length === 0) return peopleLen;
  let solo = 0;
  for (let i = 0; i < peopleLen; ++i) {
    // 아무 조합에도 못 속한 사람 카운트
    for (let comb of combs) {
      if (comb[0] !== i && comb[1] !== i) solo++;
    }
  }
  const boatCnt = solo + Math.ceil((peopleLen - solo) / 2);

  return boatCnt;
}
