function solution(n, a, b) {
  /*  
    2^3 => 3라운드까지 존재 (그 다음 레벨은 우승자 1명 )
             ㅁ
        ㅁ        ㅁ
     ㅁ    ㅁ   ㅁ    ㅁ  
    ㅁ ㅁ ㅁ ㅁ ㅁ ㅁ ㅁ ㅁ 
    */
  // 2로 나누다가 처음으로 반대편에 위치할 때
  let answer = 0;
  while (a != b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}
