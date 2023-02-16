function solution(left, right) {
  let answer = 0;
  while (left <= right) {
    const divisorCnt = getDivisorCnt(left);
    answer += divisorCnt % 2 === 0 ? left : -1 * left;
    left++;
  }
  return answer;
}

function getDivisorCnt(num) {
  if (num === 1) return 1;
  let i = 2;
  let cnt = 2;
  while (i * i < num) {
    if (!(num % i)) cnt += 2;
    i++;
  }
  if (i * i === num) cnt++;
  return cnt;
}
