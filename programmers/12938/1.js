function solution(n, s) {
  const element = Math.floor(s / n);
  if (element < 1) return [-1];
  const combs = dupcombination(
    Array(s - 1)
      .fill(0)
      .map((_, i) => i + 1),
    n,
    s
  );
  let maxComp = -1;
  let maxCompSet = [];
  // console.log('combs', combs)
  for (const comb of combs) {
    if (comb.reduce((prev, cur) => prev + cur, 0) !== s) continue;
    const comp = comb.reduce((prev, cur) => prev * cur, 1);
    if (maxComp < comp) {
      maxComp = comp;
      maxCompSet = comb;
    }
  }
  return maxCompSet;
}

function dupcombination(arr, cnt, s) {
  const result = [];

  if (cnt === 1) {
    return arr.map((v) => [v]);
  }

  arr.forEach((value, idx, arr) => {
    const fixed = value;
    const restArr = arr.slice(); // 중복허용
    const comb = dupcombination(restArr, cnt - 1, s);

    let combined = comb.map((v) => [fixed, ...v]);
    combined = combined.filter(
      (v) => v.reduce((prev, cur) => prev + cur, 0) === s
    );
    combined = [...combined].filter((v) => v.length);
    result.push(...combined);
  });
  return result;
}
