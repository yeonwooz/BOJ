function solution(number) {
  const combs = combination(number, 3).filter(
    (arr) => arr.reduce((a, b) => a + b, 0) === 0
  );
  return combs.length;
}

function combination(arr, n) {
  const result = [];
  if (n === 1) return arr.map((v) => [v]);
  arr.forEach((value, index, arr) => {
    const fixed = value;
    const restArr = arr.slice(index + 1);
    const combinationArr = combination(restArr, n - 1);
    const combined = combinationArr.map((v) => [fixed, ...v]);
    if (combined.length) result.push(...combined);
  });
  return result;
}
