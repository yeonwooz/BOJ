function solution(k, m, score) {
  /*
    score를 내림차순 정렬한후, m개씩으로 나누어 떨어지지 않는 오른쪽 나머지를 버린다
    사과상자 n개에 대해서, i를 m개씩 증가시키며 넣는다 
    결국 각 상자의 대표가격p은 i += m-1 주기로 책정되고, 
    answer = sum(p(i) * m)
    */
  score.sort((a, b) => b - a);
  const len = score.length; //ex.5
  const rest = len % m; // ex. m=3 ->  rest=2
  score = score.slice(0, len - rest); // ex. slice(0,3) => score[0],score[1],score[2]
  let answer = 0;
  for (let i = m; i <= len; i += m) {
    answer += score[i - 1] * m;
  }
  return answer;
}
