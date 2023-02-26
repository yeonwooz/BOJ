function solution(strs, t) {
  const tlen = t.length;
  const dp = Array(tlen).fill(-1); // 해당 인덱스까지의 문자열을 만드는 최소경우의 수
  let sliceEnd = 1; //
  let startingPoint = -1;
  while (sliceEnd <= tlen) {
    // 시작점 찾기
    const sliced = t.slice(0, sliceEnd);
    for (const word of strs) {
      // console.log('sliceEnd',sliceEnd,'sliced', sliced,'word', word)
      if (word === sliced) dp[sliceEnd - 1] = 1;
    }

    startingPoint = dp.indexOf(1);
    if (startingPoint !== -1) break;
    sliceEnd++;
  }
  //단어를 시작할 수 없으면 진행할 수 없다
  if (startingPoint === -1) return -1;

  for (let i = startingPoint + 1; i < tlen; ++i) {
    for (let j = 0; j < i; ++j) {
      if (dp[j] === -1) continue;
      // j까지 끊은 단어에서 추가로 붙여서 i까지 끊은 단어 만들 수 있다면 Math.min() / 없다면 return -1
      const former = t.slice(0, j + 1);
      for (const word of strs) {
        console.log("former", former, "word", word);
        if (former + word === t.slice(0, i)) {
          found = true;
          if (dp[i] === -1) {
            dp[i] = dp[j] + 1;
          } else {
            dp[i] = Math.min(dp[j] + 1, dp[i]);
          }
        }
      }
    }
    // if (!found) return -1
  }
  return dp[tlen - 1];
}
