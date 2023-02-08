function solution(t, p) {
  const tlen = t.length;
  const plen = p.length;
  let cnt = 0;
  for (let i = 0; i <= tlen - plen; ++i) {
    if (parseInt(t.slice(i, i + plen)) <= parseInt(p)) cnt++;
  }
  return cnt;
}
