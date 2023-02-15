function solution(number, limit, power) {
  /*
    let answer = 0
     for (i=1번기사부터 number번 기사에 대해)
     answer += ((i의 약수개수) <= limit ? (i의 약수개수)  : power)
    */
  let answer = 0;
  for (let i = 1; i <= number; ++i) {
    let cnt = getDivisorCnt(i);
    answer += cnt <= limit ? cnt : power;
  }
  return answer;
}

function getDivisorCnt(num) {
  if (num === 1) return 1;
  let cnt = 2;
  let i = 2;
  while (i * i < num) {
    if (num % i === 0) cnt += 2;
    i++;
  }

  if (i * i === num) cnt++;
  return cnt;
}
