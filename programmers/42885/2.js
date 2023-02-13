function solution(people, limit) {
  people.sort((a, b) => b - a);
  let l = 0;
  let r = people.length - 1;
  let cnt = 0;
  while (l < r) {
    const sum = people[l] + people[r];
    if (sum > limit) {
      l++;
    } else {
      l++;
      r--;
    }
    cnt++;
  }
  if (l === r) cnt++;
  return cnt;
}
