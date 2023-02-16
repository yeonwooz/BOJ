function solution(n) {
  const reversed = n.toString(3).split("").reverse().join("");
  let answer = 0;
  let digit = 1;
  for (let i = reversed.length - 1; i >= 0; --i) {
    answer += +reversed[i] * digit;
    digit = digit * 3;
  }
  return answer;
}
