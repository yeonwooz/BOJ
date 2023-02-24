function solution(x, y, n) {
  let minCnt = Infinity;
  recur(y, 0);
  return minCnt === Infinity ? -1 : minCnt;

  function recur(num, cnt) {
    if (num < x) return;
    if (num === x) {
      if (cnt < minCnt) minCnt = cnt;
      return;
    }
    recur(num - n, cnt + 1);
    if (num % 2 === 0) recur(num / 2, cnt + 1);
    if (num % 3 === 0) recur(num / 3, cnt + 1);
  }
}
