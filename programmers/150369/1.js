function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  // 갈때 최대한 멀리 많이 배달(deliveries), 돌아올때 최대한 멀리 많이 수거(pickups)
  while (
    deliveries.reduce((a, b) => a + b, 0) > 0 ||
    pickups.reduce((a, b) => a + b, 0) > 0
  ) {
    for (let i = n - 1; i >= 0; --i) {
      let space = cap;
      // 배달 수거 모두 없는 집 건너뜀
      if (deliveries[i] === 0 && pickups[i] === 0) continue;
      // i번째 집까지 간다
      const dest = i;
      for (let j = dest; j >= 0; --j) {
        if (!space) break;
        while (space && deliveries[j]) {
          deliveries[j] -= 1;
          space -= 1;
        }
      }

      space = cap;
      // i번째 집에서 물류창고로 돌아온다
      for (let j = dest; j >= 0; --j) {
        if (!space) break;
        while (space && pickups[j]) {
          pickups[j] -= 1;
          space -= 1;
        }
      }

      answer += 2 * (dest + 1);
    }
  }

  return answer;
}
