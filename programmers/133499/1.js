function solution(babbling) {
  let cnt = 0;
  for (let bab of babbling) {
    const dict = new Set();
    dict.add("aya");
    dict.add("ye");
    dict.add("woo");
    dict.add("ma");
    // console.log(dict.keys())
    let flag = false;

    for (let word of dict.keys()) {
      if (bab.length === 1) break;
      const splitted = bab.split(word);
      const len = splitted.length;
      if (len === 1) continue;
      if (len >= 3) break;

      bab = splitted.join("");
      if (!bab) break;
      dict.delete(word);
      flag = true;
    }

    if (flag) cnt++;
  }
  return cnt;
}
