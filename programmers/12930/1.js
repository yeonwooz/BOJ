function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      word = word.split("");
      for (let i = 0; i < word.length; ++i) {
        word[i] = i % 2 ? word[i].toLowerCase() : word[i].toUpperCase();
      }
      return word.join("");
    })
    .join(" ");
}
