function solution(r1, r2) {
  let cnt = 0;
  for (let x = -1 * r2; x <= r2; ++x) {
    for (let y = -1 * r2; y <= r2; ++y) {
      if (r1 ** 2 <= x ** 2 + y ** 2 && x ** 2 + y ** 2 <= r2 ** 2) {
        cnt++;
      }
    }
  }
  return cnt;
}
