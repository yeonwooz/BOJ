function solution(targets) {
  targets.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[1] < b[1]) return -1;
    return 1;
  });
  let cnt = 0;
  let curPos = -1;
  for (const target of targets) {
    if (target[0] < curPos && curPos < target[1]) {
      curPos = target[1] - 0.1;
    } else {
      cnt++;
      curPos = target[1] - 0.1;
    }
  }
  return cnt;
}
