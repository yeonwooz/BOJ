function solution(name, yearning, photo) {
  const scoreMap = new Map();
  for (let i = 0; i < name.length; ++i) {
    scoreMap.set(name[i], yearning[i]);
  }
  const answer = [];
  for (const arr of photo) {
    let sum = 0;
    for (const person of arr) {
      sum += scoreMap.get(person) || 0;
    }
    answer.push(sum);
  }
  return answer;
}
