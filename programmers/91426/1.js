function solution(gems) {
  // gems length 10만 -> O(N), O(NlogN) 탐색 허용
  const typeCnt = gems.filter((v, i) => gems.indexOf(v) === i).length;

  let i = 0;
  let j = 0;
  const len = gems.length;
  while (i < len && j < len) {
    // console.log(i,j,gems.slice(i,j+1), typeCnt)
    const sliced = gems.slice(i, j + 1);
    if (sliced.filter((v, i) => sliced.indexOf(v) === i).length === typeCnt)
      break;
    while (gems[i] === gems[i + 1] && i < j) {
      i++;
    }
    if (i < j && gems[i] === gems[j]) i++;
    else j++;
  }
  j === len - 1 ? len - 1 : j;
  return [i + 1, j + 1];
}
