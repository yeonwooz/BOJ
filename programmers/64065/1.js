function solution(s) {
  // 튜플 : 읽기 전용 자료형, 원소의 순서가 다르면 다른 튜플
  // 핵심1 : 집합은 원소의 순서가 바뀌어도 상관없다 -> {1,2,3} = {2,1,3}
  // 핵심2 : 집합들을 나열할 때 오름차순 나열해서, 더 개수가 작은 집합의 원소가 튜플 원소 상에서 먼저 와야 한다.

  s = s
    .slice(1, s.length - 1)
    .split("}")
    .join("")
    .split("{");
  s.sort((a, b) => {
    if (a.length < b.length) return -1;
    return 1;
  });
  const set = new Set();
  for (const str of s) {
    if (str.length === 0) continue;
    const nums = str.split(",");
    for (const num of nums) {
      if (num.length === 0) continue;
      set.add(parseInt(num));
    }
  }
  const tuple = [...set.keys()];
  return tuple;
}
