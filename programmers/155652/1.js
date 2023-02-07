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
    let cnt = 0;
    while (cnt < index) {
      let nextAscii = curAscii + ptr;
      while (nextAscii > zCode) {
        nextAscii = nextAscii - zCode + ("a".charCodeAt() - 1);
      }

      const nextAlpha = String.fromCharCode(nextAscii);

      if (!skipmap.get(nextAlpha)) {
        cnt++;
      }
      ptr++;
      if (cnt === index) {
        s[i] = nextAlpha;
      }
    }
  }
  return s.join("");
}
