function solution(k, score) {
  const len = score.length;

  let winners = [];
  let day = 1;
  let answer = [];
  while (day <= len) {
    if (day <= k) {
      winners.push(score[day - 1]);
      answer.push(Math.min(...winners));
    } else {
      winners.sort((a, b) => a - b);

      const cur = score[day - 1];
      if (winners[0] <= cur) {
        winners[0] = cur;
      }

      answer.push(Math.min(...winners));
    }

    day++;
  }
  return answer;
}
