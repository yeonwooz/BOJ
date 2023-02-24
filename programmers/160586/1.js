function solution(keymap, targets) {
  const cmap = new Map();
  for (let i = 0; i < keymap.length; ++i) {
    const keynum = i + 1;
    const chars = keymap[i];
    for (let j = 0; j < chars.length; ++j) {
      const cnt = j + 1;
      const char = chars[j];
      if (!cmap.has(char)) {
        cmap.set(char, {
          num: keynum,
          pushCnt: cnt,
        });
      } else if (cmap.get(char).pushCnt > cnt) {
        cmap.set(char, {
          num: keynum,
          pushCnt: cnt,
        });
      }
    }
  }

  const answer = [];

  for (const target of targets) {
    let cnt = 0;
    for (let i = 0; i < target.length; ++i) {
      const c = target[i];
      if (!cmap.has(c)) {
        answer.push(-1);
        break;
      }
      cnt += cmap.get(c).pushCnt;

      if (i + 1 === target.length) {
        answer.push(cnt);
      }
    }
  }
  return answer;
}
