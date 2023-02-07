function solution(s, skip, index) {
  let alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  skip.split("").map((i) => {
    const findSkipIdx = alphabet.indexOf(i);
    alphabet.splice(findSkipIdx, 1);
  });

  const result = s.split("").map((i) => {
    const findSIdx = alphabet.indexOf(i) + index;
    return alphabet[findSIdx % alphabet.length];
  });
  return result.join("");
}
