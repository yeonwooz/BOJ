// started at 10:37
main();
function main() {
  const [s, boom] = getInputs();
  solve(s, boom);
}
function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [s, boom] = fs.readFileSync(filepath).toString().trim().split("\n");

  return [s, boom];
}

function solve(s, boom) {
  const slen = s.length;
  const boomlen = boom.length;
  const boomLast = boom[boomlen - 1];

  /*
   for문으로 s를 처음부터 끝까지 탐색하는 동안,
      스택에 캐릭터를 하나씩 집어넣는다 
      만약 폭발문자열의 끝을 만났고 인덱스가 boomlen-1 이상이라면, 
      
      stk의 맨끝부터 앞으로, 폭발문자열의 맨 끝부터 앞으로, 비교해서
        다르다면, break
        boom[-1]까지 도달했다면 stk의 해당 인덱스부터 boomlen만큼 splice
      ex. boomlen=5
      ㅇ ㅇ ㅇ ㅇ ㅇ
   */
  const stk = [];

  for (let i = 0; i < slen; ++i) {
    const curcha = s[i];
    stk.push(curcha);
    if (curcha === boomLast && i >= boomlen - 1) {
      const stklen = stk.length;
      if (stklen === 0) continue;
      let stkIdx = stklen - 1;
      let j;
      for (j = boomlen - 1; j >= 0; --j && stkIdx >= 0) {
        if (boom[j] != stk[stkIdx]) break;
        stkIdx--;
      }
      if (j === -1) {
        stk.splice(stkIdx + 1, boomlen);
      }
    }
  }
  console.log(stk.length === 0 ? "FRULA" : stk.join(""));
}
