function solution(str1, str2) {
  if (!str1 && !str2) return 65536;

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < str1.length - 1; ++i) {
    const s = (str1[i] + str1[i + 1]).toLowerCase();
    if (s.match(/[^a-zA-Z]/g)) continue;
    if (map1.has(s)) {
      map1.set(s, map1.get(s) + 1);
    } else {
      map1.set(s, 1);
    }
  }

  for (let i = 0; i < str2.length - 1; ++i) {
    const s = (str2[i] + str2[i + 1]).toLowerCase();
    if (s.match(/[^a-zA-Z]/g)) continue;
    if (map2.has(s)) {
      map2.set(s, map2.get(s) + 1);
    } else {
      map2.set(s, 1);
    }
  }
  const unionMap = [...new Map([...map1, ...map2])];

  let intserSize = 0;
  let unionSize = 0;
  for (const [el, cnt] of unionMap) {
    unionSize += cnt;
    if (map1.has(el) && map2.has(el)) {
      intserSize += Math.min(map1.get(el), map2.get(el));
    }
  }

  if (intserSize === unionSize) return 65536;
  return parseInt((intserSize / unionSize) * 65536);
}
