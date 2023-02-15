function solution(babbling) {
  for (let bab of babbling) {
    console.log("bab", bab);
    const dict = new Set();
    dict.add("aya");
    dict.add("ye");
    dict.add("woo");
    dict.add("ma");
    let cnt = 0;
    let flag = true;
    let prev = "";
    while (bab) {
      for (let word of dict.keys()) {
        if (!bab) break;
        // bab이 이 단어를 포함하는가
        const splitted = bab.split(word);
        const splitLen = splitted.length;
        if (splitLen === 2) {
          cnt++;
          bab = splitted.join("");
          if (prev === word || (bab.length === 1 && !dict.has(bab))) {
            flag = false;
            break;
          }
          prev = word;
        }
        if (splitLen === 3) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
    }
    return cnt;
  }
}
