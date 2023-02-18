function solution(n, times) {
  // 평균 시간으로 모두 동일하게 검사할 경우로 수렴한다
  let l = 1;
  let r = n * Math.max(...times);
  let minTime = Infinity;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    let cnt = 0;
    for (let i = 0; i < times.length; ++i) {
      // mid시간씩 하면 총 몇명을 심사할 수 있을까? n명을 넘을까?
      cnt += Math.floor(mid / times[i]);
    }

    if (cnt < n) {
      l = mid + 1;
    } else {
      minTime = Math.min(minTime, mid);
      r = mid;
    }
  }

  return minTime;
}
