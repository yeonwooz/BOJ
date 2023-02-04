function solution(x, n) {
  return [...Array(n).keys()].map((key) => key * x + x);
}
