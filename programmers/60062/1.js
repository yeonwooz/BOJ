function solution(n, weak, dist) {
  const len = weak.length;
  const linear_weak = new Array(len * 2 - 1).fill(0);  // 시계방향만 고려하기 위해 펼친다

  for (let i = 0; i < len * 2 - 1; i++) {
    linear_weak[i] = i < len ? weak[i] : weak[i - len] + n;
  }

  dist.sort((a, b) => b - a);

  for (let i = 1; i <= dist.length; i++) {
    const permutation = getPermutation(dist, i);  // 각 경로순열

    for (const perm of permutation) {
      for (let j = 0; j < len; j++) {
        let line = linear_weak.slice(j, len + j); // 남은 작업량
        for (const p of perm) {
          const coverage = line[0] + p;  // 현재 작업자가 작업할 수 있는 범위
          line = line.filter((e) => e > coverage);
          if (!line.length) return i;
        }
      }
    }
  }

  return -1;
}

const getPermutation = (arr, cnt) => {
  if (cnt === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((value, idx, arr) => {
    const fixed = value
    const restArr = arr.filter((_, index) => index !== idx);
    const perms = getPermutation(restArr, cnt - 1);
    const combined = perms.map((v) => [fixed, ...v]);
    result.push(...combined);
  });

  return result;
};
