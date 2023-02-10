function solution(n) {
  let i = 0;
  let cnt = 0;
  while (++i <= n) {
    let j = i;
    let sum = j;
    while (sum <= n) {
      if (sum === n) cnt++;
      j++;
      sum += j;
    }
  }
  return cnt;
}
