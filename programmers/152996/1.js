function solution(weights) {
  weights.sort((a, b) => b - a);
  const rates = [1, 3 / 2, 2, 4 / 3]; // 내림차순이니깐
  const store = {};
  let cnt = 0;
  for (let i = 0; i < weights.length; ++i) {
    const w = weights[i];
    rates.forEach((rate) => {
      const comp = rate * w;
      if (comp && store[comp]) {
        cnt += store[comp];
      }
    });
    if (!store[w]) store[w] = 1;
    else store[w]++;
  }
  return cnt;
}
