function solution(a, b, n) {
  let cnt = 0;
  while (n >= a) {
    let bottles = Math.floor(n / a) * b;
    cnt += bottles;
    n = bottles + (n % a);
  }
  return cnt;
}
