function solution(n, a, b) {
  /*  
    2^3 => 3라운드까지 존재 (그 다음 레벨은 우승자 1명 )
             ㅁ
        ㅁ        ㅁ
     ㅁ    ㅁ   ㅁ    ㅁ  
    ㅁ ㅁ ㅁ ㅁ ㅁ ㅁ ㅁ ㅁ 
    */
  // 2로 나누다가 처음으로 반대편에 위치할 때
  return recur(0, n, a, b, Math.log2(n));
}

function recur(from, n, a, b, level) {
  if (n === 1 || level === 1) return level;
  if (a <= from + n / 2 && b > from + n / 2) return level;
  let answer = 0;
  for (let i = 0; i < n; i += n / 2) {
    // n = 8  -> 0,4
    // n = 4  -> 0,2,4,6
    answer = Math.max(answer, recur(i, n / 2, a, b, level - 1));
  }
  return answer;
}
