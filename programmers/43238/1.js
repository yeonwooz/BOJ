function solution(n, times) {
  const max = Math.max(...times);

  let left = 1;
  let right = max * n;
  let answer;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let people = 0;
    // 모든 사람이 심사관에게 mid분동안 심사받는다면 전부 끝낼 수 있나?
    for (let time of times) {
      // 한 심사관이 mid분 안에 최대 몇명 볼 수 있는지
      people += Math.floor(mid / time);
      if (people >= n) break;
    }
    if (people < n) {
      // mid가 커져야 한다. => 범위를 늘려야 한다
      left = mid + 1;
    } else {
      // mid가 더 작아져도 된다 => 범위를 좁혀보자
      answer = mid;
      right = mid;
    }
  }
  return answer;
}
