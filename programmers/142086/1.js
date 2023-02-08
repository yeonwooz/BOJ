function solution(s) {
  const map = new Map();
  const answer = [];
  for (let i = 0; i < s.length; ++i) {
    const prevIndex = map.get(s[i]);
    if (prevIndex === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - prevIndex);
    }
    map.set(s[i], i);
  }
  return answer;
}
