function solution(n, m, section) {
  let first = section[0];
  let last = section[section.length - 1];
  let cur = first;
  let cnt = 0;
  while (cur <= n) {
    if (cur > last) {
      break;
    }
    cur += m;
    cnt++;
  }
  return cnt;
}
