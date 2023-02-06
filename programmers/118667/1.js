function solution(queue1, queue2) {
  let sum1 = queue1.reduce((prevsum, newelement) => prevsum + newelement, 0);
  let sum2 = queue2.reduce((prevsum, newelement) => prevsum + newelement, 0);
  if ((sum1 + sum2) % 2) return -1;

  const maxCnt = (queue1.length + queue2.length) * 2 + 1;
  let cnt = 0;
  while (sum1 !== sum2) {
    if (cnt >= maxCnt) {
      cnt = -1;
      break;
    }
    if (sum1 < sum2) {
      const popped = queue2.shift();
      queue1.push(popped);
      sum1 += popped;
      sum2 -= popped;
    } else if (sum2 < sum1) {
      const popped = queue1.shift();
      queue2.push(popped);
      sum2 += popped;
      sum1 -= popped;
    }
    cnt++;
  }
  return cnt;
}
