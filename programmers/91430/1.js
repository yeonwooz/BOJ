function solution(strs, t) {
  const tlen = t.length;
  const dp = Array(tlen).fill(Infinity); // 해당 인덱스까지의 문자열을 만드는 최소경우의 수
 
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
