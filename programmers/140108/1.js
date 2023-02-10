function solution(s) {
  let i = 0;
  let x = null;
  let head = 0;
  let flag = 0;
  let chunkCnt = 0;

  while (s[i]) {
    if (flag === 0) {
      head = i;
      x = s[i];
      chunkCnt++;
      flag = 1;
    }

    if (i !== head) {
      x === s[i] ? flag++ : flag--;
    }

    i++;
  }
  return chunkCnt;
}
