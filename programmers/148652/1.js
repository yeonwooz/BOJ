function solution(n, l, r) {
  //     https://velog.io/@_jake/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9C%A0%EC%82%AC-%EC%B9%B8%ED%86%A0%EC%96%B4-%EB%B9%84%ED%8A%B8%EC%97%B4-Javascript
  /*
        [0]: 1    길이 1               => 1       
        [1]: 11011   길이 5            => 4   
        [2]: 11011 11011 00000 11011 11011    길이 5^2     => 길이의 절반보다 왼쪽 / 오른쪽 
        [3]: 11011 11011 00000 11011 11011 11011 11011 00000 11011 11011 00000 00000 00000 00000 00000 00000 ...    길이 5^3
        */

  let answer = 0;
  let memo = Array(r - l + 1)
    .fill()
    .map((_, idx) => idx + l);

  if (n === 1) {
    return memo.filter((el) => el !== 3).length;
  }

  while (memo.length) {
    const newMemo = [];

    for (const el of memo) {
      if (el === 1) {
        answer += 1;
      } else {
        if (!!((el + 2) % 5)) {
          const fixedEl = Math.ceil(el / 5);
          newMemo.push(fixedEl);
        }
      }
    }
    memo = newMemo;
  }

  return answer;
}
