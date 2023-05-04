// https://leejams.github.io/N%EC%A7%84%EC%88%98-%EA%B2%8C%EC%9E%84/

function solution(n, t, m, p) {
  let str = "";
  for (let i = 0; str.length < m * t; ++i) {
    // m명 - 돌아가며 1번째 수 말함 -> 돌아가며 2번째 수 말함 -> ... -> 돌아가며 t번째 수 말함.
    // 모든 사람이 t개의 숫자를 말하게 되는 길이 이상으로는 더이상 진행할 필요 없음.

    str += i.toString(n).toUpperCase();
    // 1명이 말할 때마다 str에 해당 수를 붙임
    console.log(str);
  }

  // str: 이 게임에서 언급될 모든 수를 이어붙인 최대길이 문자열이 된다.  ex. 0123456789101112...

  let answer = "";
  let cnt = 0;

  while (answer.length < t) {
    const s = str.substring(cnt, cnt + m); // m명이 순서를 돈다
    answer += s[p - 1]; // 주인공은 늘 p-1(인덱스기준) 번째의 수를 말한다
    cnt += m; // 잘라야 하는 end인덱스가 인원수만큼씩 늘어난다
  }
  /*
  예를 들어 , 
  n=2	t=4	m=2	p=1     
  => 2진법, 주인공은 총 4개의 숫자를 말해야 함, 2명, 주인공 순서는 0번째 인덱스

  str = 011011100

  answer 는
  0
  01
  011
  0111
  */

  return answer;
}
