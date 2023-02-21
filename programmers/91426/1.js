function solution(gems) {
  // gems length 10만 -> O(N), O(NlogN) 탐색 허용
  const cnt = new Set(gems).size;
  const box = new Map();
  box.set(gems[0], 1);
  const answers = []; //i,j
  let i = 0;
  let j = 0;

  while (0 <= i && i <= j && j < gems.length) {
    if (box.size === cnt) {
      answers.push([i + 1, j + 1]);
      if (box.get(gems[i]) > 1) {
        box.set(gems[i], box.get(gems[i]) - 1);
      } else {
        box.delete(gems[i]);
      }
      i++;
    }
    if (box.size < cnt) {
      j++;
      box.set(gems[j], box.get(gems[j]) ? box.get(gems[j]) + 1 : 1);
    }
  }
  answers.sort((a, b) =>
    a[1] - a[0] < b[1] - b[0]
      ? -1
      : a[1] - a[0] === b[1] - b[0]
      ? a[0] - b[0]
      : 1
  );
  return answers[0];
}
