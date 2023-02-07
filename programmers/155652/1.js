function solution(s, skip, index) {
  const skipmap = new Map();
  for (const alpha of skip) {
    skipmap.set(alpha, 1);
  }
  s = s.split("");

  const zCode = "z".charCodeAt();

  for (let i = 0; i < s.length; ++i) {
    const curAscii = s[i].charCodeAt();
    let ptr = 1;
    let cnt = 1;
    let nextAlpha = s[i];
    while (cnt <= index) {
      let nextAscii = curAscii + ptr;
      if (nextAscii > zCode)
        nextAscii = nextAscii - zCode + ("a".charCodeAt() - 1);

      nextAlpha = String.fromCharCode(nextAscii);
      if (!skipmap.get(nextAlpha)) {
        cnt++;
      }
      ptr++;
    }
    s[i] = nextAlpha;
  }
  return s.join("");
}
