function solution(k, d) {
  let cnt = 0;
  for (let a = 0; (a * k) ** 2 <= d ** 2; ++a) {
    const x = a * k;
    const maxY = Math.floor(Math.sqrt(d ** 2 - x ** 2, 2));
    const ycnt = Math.floor(maxY / k);
    cnt += ycnt + 1;
  }
  return cnt;
}
