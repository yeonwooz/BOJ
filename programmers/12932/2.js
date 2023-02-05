function solution(n) {
  const arr = [];
  while (n) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  }
  return arr;
}
