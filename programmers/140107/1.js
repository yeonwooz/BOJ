function solution(k, d) {
  let cnt = 0;
  for (let a = 0; (a * k) ** 2 <= d ** 2; ++a) {
    for (let b = 0; (a * k) ** 2 + (b * k) ** 2 <= d ** 2; ++b) {
      cnt++;
    }
  }
  return cnt;
}
