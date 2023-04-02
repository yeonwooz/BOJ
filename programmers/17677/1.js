function solution(str1, str2) {
  if (!str1 && !str2) return 65536;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < str1.length - 1; ++i) {
    const s = str1[i] + str1[i + 1];
    if (s.match(/[^a-zA-Z]/g)) continue;
    if (map1.has(s)) {
      map1.set(s, map1.get(s) + 1);
    } else {
      map1.set(s, 1);
    }
  }

  for (let i = 0; i < str2.length - 1; ++i) {
    const s = str2[i] + str2[i + 1];
    if (s.match(/[^a-zA-Z]/g)) continue;
    if (map2.has(s)) {
      map2.set(s, map2.get(s) + 1);
    } else {
      map2.set(s, 1);
    }
  }

  let inter = 0;
  let union = 0;
  for (const [el, cnt] of map1) {
    if (map2.has(el)) {
      inter += Math.min(cnt, map2.get(el));
      union += Math.max(cnt, map2.get(el));
    } else {
      union += cnt;
    }
  }

  for (const [el, cnt] of map2) {
    if (!map1.has(el)) union += cnt;
  }

  if (inter === union) return 65536;
  return Math.floor((inter / union) * 65536);
}
