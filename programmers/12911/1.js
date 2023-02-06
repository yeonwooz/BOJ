function solution(n) {
  const cur = n.toString(2);
  const curOneCnt = cur.split("").filter((x) => x === "1").length;
  while (1) {
    n++;
    const next = n.toString(2);
    const nextOneCnt = next.split("").filter((x) => x === "1").length;
    if (curOneCnt === nextOneCnt) return n;
  }
}
