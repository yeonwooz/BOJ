function solution(k, tangerine) {
  const map = new Map();
  for (let size of tangerine) {
    const sizeCnt = map.get(size);
    if (!sizeCnt) {
      map.set(size, 1);
    } else {
      map.set(size, sizeCnt + 1);
    }
  }
  const entries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  let typeCnt = 0;
  let amount = 0;
  for (let [_, cnt] of entries) {
    if (amount >= k) break;
    typeCnt++;
    amount += cnt;
  }
  return typeCnt;
}
