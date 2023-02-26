function solution(strs, t) {
  const tlen = t.length;
  const dp = Array(tlen).fill(Infinity); // 해당 인덱스까지의 문자열을 만드는 최소경우의 수
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
  for (let j = 0; j < tlen; ++j) {
    const current = t.slice(0, j + 1);
    for (const word of strs) {
      if (current.endsWith(word)) {
        const diff = current.length - word.length;

        if (!diff) dp[j] = 1;
        else dp[j] = Math.min(dp[j], dp[diff - 1] + 1);
      }
    }
  }
  const answer = dp[tlen - 1];
  return answer === Infinity ? -1 : answer;
}
