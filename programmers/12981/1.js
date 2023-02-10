function solution(n, words) {
  const wordSet = new Set();
  const score = Array(n + 1).fill(0);
  let playerNum = 0;
  let wordIdx = 0;
  let lastWord = null;
  while (wordIdx < words.length) {
    // 이번 차례 플레이어가 단어 제시
    playerNum = (playerNum + 1) % n;
    if (playerNum === 0) playerNum = n;
    score[playerNum]++;

    const word = words[wordIdx];
    // 판정 - 탈락
    if (lastWord && lastWord[lastWord.length - 1] !== word[0])
      return [playerNum, score[playerNum]];
    if (wordSet.has(word)) return [playerNum, score[playerNum]];
    if (word.length === 1) return [playerNum, score[playerNum]];

    // 판정 - 성공 (단어 인정)
    lastWord = word;
    wordSet.add(word);
    wordIdx++;
  }
  return [0, 0];
}
