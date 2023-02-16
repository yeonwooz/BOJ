function solution(a, b) {
  let charsArray1 = Array(10).fill(0); // 해당 인덱스에 해당하는 수가 몇개인가
  for (let i = 0; i < a.length; ++i) {
    charsArray1[+a[i]]++;
  }
  let charsArray2 = Array(10).fill(0); // 해당 인덱스에 해당하는 수가 몇개인가
  for (let i = 0; i < b.length; ++i) {
    charsArray2[+b[i]]++;
  }

  let answer = "";
  for (let i = 9; i >= 1; --i) {
    const num = Math.min(charsArray1[i], charsArray2[i]);
    if (num) {
      answer += String(i).repeat(num);
    }
  }
  if (charsArray1[0] && charsArray2[0]) answer += "0";

  return answer || "-1";
}
