function solution(gems) {
  // gems length 10만 -> O(N), O(NlogN) 탐색 허용
  const typeCnt = [...new Set(gems)].length;
  const answers = []; //i,j
  let i = 0;
  let j = 0;
  while (0 <= i && i <= j && j < gems.length) {
    const sliced = gems.slice(i, j + 1);
    const curCnt = [...new Set(sliced)].length;
    if (curCnt === typeCnt) {
      answers.push([i + 1, j + 1]);
    }
    if (i + 1 < j && gems[i] === gems[i + 1]) {
      i++;
    } else if (i < j && gems[i] === gems[j]) {
      i++;
    } else {
      j++;
    }
  }
  console.log(answers);
  answers.sort((a, b) =>
    a[1] - a[0] < b[1] - b[0]
      ? -1
      : a[1] - a[0] === b[1] - b[0]
      ? a[0] - b[0]
      : 1
  );
  return answers[0];
}
