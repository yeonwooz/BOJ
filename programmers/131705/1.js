function solution(number) {
  let cnt = 0;
  const len = number.length;

  for (let i = 0; i < len - 2; ++i) {
    for (let j = i + 1; j < len - 1; ++j) {
      for (let k = j + 1; k < len; ++k) {
        if (number[i] + number[j] + number[k] === 0) cnt++;
      }
    }
  }
  return cnt;
}
