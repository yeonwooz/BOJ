function solution(numbers) {
  const answer = [-1];
  const len = numbers.length;

  let curMaxIdx = len - 1;
  let curMax = numbers[curMaxIdx]; // 이미 -1인 것보다 더 크면

  for (let i = len - 2; i >= 0; --i) {
    let found = false;
    const left = numbers[i];
    if (curMax < left) {
      curMax = left;
      curMaxIdx = i;
      if (answer[curMaxIdx] === -1) continue;
    }

    for (let j = i + 1; j < len; ++j) {
      const right = numbers[j];
      if (left < right) {
        found = true;
        answer.unshift(right);
        break;
      }
    }
    if (!found) answer.unshift(-1);
  }
  return answer;
}
