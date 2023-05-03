// https://leejams.github.io/N%EC%A7%84%EC%88%98-%EA%B2%8C%EC%9E%84/

function solution(n, t, m, p) {
  let digit = 1;
  // 십진수 : 1 (0~9. 10개) 2 (10~99. 90개) 3 (100 ~ 999) 4 (1000 ~ 9999)  ...
  // 이진수 : 1 (0~1. 2개) 2 (10~11. 2개) 3 (100 ~ 111. 2^2개) 4 (1000 ~ 1111 2^3개)  ...
  // n진수 : 1 (0~n-1 . n개), ... n^k개

  let order = 0;
  // 십진수 : 0 1 2 3 ... 9 10 11 12
  // 이진수 : 0 1 10 11 100 ...
  // n진수 : 0 ...

  let str = "";
  for (let i = 0; str.length < m * t; ++i) {
    str += i.toString(n).toUpperCase();
  }

  let answer = "";
  let cnt = 0;

  while (answer.length < t) {
    const s = str.substring(cnt, cnt + m);
    answer += s[p - 1];
    cnt += m;
  }
  return answer;
}
