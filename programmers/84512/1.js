// https://han-joon-hyeok.github.io/posts/programmers-vowel-dictionary/
function solution(word) {
  const vowels = "AEIOU".split("");
  const counts = {};
  let idx = 0;
  DFS("", 0);
  return counts[word];

  function DFS(w, len) {
    if (len > 5) return;
    counts[w] = idx++;
    vowels.forEach(v => {
      DFS(w + v, len + 1);
    });
  }
}
