function solution(d, budget) {
  d.sort((a, b) => a - b);
  let i = 0;
  while (budget > 0 && i < d.length) {
    budget -= d[i];
    if (budget >= 0) i++;
  }
  return i > 0 ? i : 0;
}
