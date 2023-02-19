function solution(numbers) {
  return [...new Set(combination(numbers, 2).map((x) => x[0] + x[1]))].sort(
    (a, b) => a - b
  );
}

function combination(arr, cnt) {
  const result = [];
  if (cnt === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combs = combination(restArr, cnt - 1);
    const combined = combs.map((v) => [fixed, ...v]);
    result.push(...combined);
  });
  return result;
}
