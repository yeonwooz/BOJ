function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  // 갈때 최대한 멀리 많이 배달(deliveries), 돌아올때 최대한 멀리 많이 수거(pickups)

  for (let i = n - 1; i >= 0; --i) {
    // 배달 수거 모두 없는 집 건너뜀
    while (deliveries[i] > 0 || pickups[i] > 0) {
      deliveries[i] -= cap;
      pickups[i] -= cap;
      answer += 2 * (i + 1);
    }

    if (deliveries[i] < 0) {
      deliveries[i - 1] += deliveries[i];
    }

    if (pickups[i] < 0) {
      pickups[i - 1] += pickups[i];
    }
  }

  return answer;
}
