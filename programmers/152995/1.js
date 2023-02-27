function solution(scores) {
  const target = scores[0];

  scores = scores.map(([a, b]) => ({
    a: a,
    b: b,
    sum: a + b,
  }));

  scores.sort((x, y) => {
    if (y.a > x.a) {
      return 1;
    } else if (y.a === x.a) {
      if (x.b < y.b) return -1;
      return 1;
    }
    return -1;
  });

  let answer = 1;
  let bScoreCut = 0;

  for (const { a, b, sum } of scores) {
    // a 순으로 내림차순 정렬되어있음
    // a가 동석차인 경우 b점수가 오름차순 정렬됨.
    // j 은 i 보다 a가 더 크기 때문에, b도 더 큰경우 i는 인센티브를 받지 못한다

    if (target[0] < a && target[1] < b) {
      // 완호가 현재사람에게 두 점수 모두 밀림
      answer = -1;
      break;
    }

    // 완호보다 a점수가 낮은 사람에 대해,
    if (bScoreCut <= b) {
      // b점수컷보다 현재사람의 b점수가 같거나 높다면

      if (target[0] + target[1] < sum) {
        // 완호의 총점보다 현재사람의 총점이 더 높다면
        answer++;
        // 완호의 순위가 뒤로 밀림
      }
      // b점수컷이 높아짐
      bScoreCut = b;
    }
    // 완호보다 두 점수 모두 낮은 사람은 고려하지 않는다
  }
  return answer;
}
