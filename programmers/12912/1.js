function solution(a, b) {
  if (a === b) return a;
  const small = a < b ? a : b;
  const large = a < b ? b : a;
  return [...Array(large - small + 1).keys()]
    .map((x) => x + small)
    .reduce((x, y) => x + y, 0);
}
