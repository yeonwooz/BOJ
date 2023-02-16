function solution(X, Y) {
  const a = X.toString();
  const b = Y.toString();

  const map = new Map();
  for (let i = 0; i < a.length; ++i) {
    if (!map.get(a[i])) {
      map.set(a[i], 1);
    } else {
      map.set(a[i], map.get(a[i]) + 1);
    }
  }
  let charsArray = Array(10).fill(0); // 해당 인덱스에 해당하는 수가 몇개인가
  for (let i = 0; i < b.length; ++i) {
    if (map.get(b[i])) {
      const num = parseInt(b[i]);
      charsArray[num]++;
      map.set(b[i], map.get(b[i]) - 1);
    }
  }
  let answer = "";

  for (let i = 9; i >= 1; --i) {
    const num = charsArray[i];
    if (num) {
      answer += String(i).repeat(num);
    }
  }
  if (charsArray[0]) answer += "0";

  return answer || "-1";
}
