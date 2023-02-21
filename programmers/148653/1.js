function solution(storey) {
  // 5를 기준으로, 미만이면 내려가는 게 낫고, 초과이면 올라가는 게 낫다
  // 5이면, 다음 자리를 살펴본다
  let answer = 0;
  while (storey) {
    let cur = storey % 10; // 일의 자리
    let next = Math.floor(storey / 10) % 10; // 십의 자리

    if (cur > 5) {
      // 일의 자리가 5보다 크면 올림한다 (10-cur만큼 올라가면 storey 의 십의자리를 하나 올릴 수 있음(일의자리 버릴것임))
      answer += 10 - cur;
      storey += 10;
    } else if (cur < 5) {
      // 일의 자리가 5보다 작으면 내림한다
      answer += cur;
    } else {
      // 일의 자리가 5이면 십의 자리를 5를 기준으로 기준으로 올림,내림한다
      answer += cur;
      storey += next >= 5 ? 10 : 0;
    }

    storey = Math.floor(storey / 10); // 다음자릿수체크
  }

  return answer;
}
