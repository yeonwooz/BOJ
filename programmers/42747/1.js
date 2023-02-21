function solution(citations) {
  let h = 0;
  let answer = h;
  while (h <= Math.max(...citations)) {
    if (citations.filter((x) => x >= h).length >= h && answer < h) {
      answer = h;
    }
    h++;
  }
  return answer;
}
