function solution(n, s) {
  const element = Math.floor(s / n);
  if (element < 1) return [-1];
  const rest = s % n;
  const arr = new Array(n).fill(element);

  // 나누어떨어지지 않는다면 배열의 마지막 원소부터 1을 더해준다.
  for (let i = 0; i < rest; ++i) {
    arr[arr.length - 1 - i]++;
  }
  return arr;
}
