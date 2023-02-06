function solution(queue1, queue2) {
  let sum1 = queue1.reduce((prevsum, newelement) => prevsum + newelement, 0);
  let sum2 = queue2.reduce((prevsum, newelement) => prevsum + newelement, 0);
  if ((sum1 + sum2) % 2) return -1;

  // 시간초과로 인해 투포인터 풀이로 변경
  let allQueue = [...queue1, ...queue2];
  let ptr1 = 0;
  let ptr2 = queue1.length;
  const half = (sum1 + sum2) / 2;
  const maxCnt = allQueue.length * 3;

  let cnt = 0;
  while (cnt < maxCnt) {
    if (sum1 === half) return cnt;
    sum1 =
      sum1 > half
        ? sum1 - allQueue[ptr1++ % allQueue.length]
        : sum1 + allQueue[ptr2++ % allQueue.length];

    cnt++;
  }
  return -1;
}
