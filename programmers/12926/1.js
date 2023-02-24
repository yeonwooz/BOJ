function solution(s, n) {
  // console.log('A'.charCodeAt())  // 65
  // console.log('Z'.charCodeAt())  // 90
  // console.log('a'.charCodeAt())  // 97
  // console.log('z'.charCodeAt())  // 122
  let answer = "";
  for (let char of s) {
    if (char === " ") {
      answer += " ";
      continue;
    }
    let ascii = char.charCodeAt() + (n % 26);
    let rest = 0;
    if ("A" <= char && char <= "Z") {
      rest = 90 - ascii;
      if (rest < 0) {
        ascii = -1 * rest + 64;
      }
    } else {
      rest = 122 - ascii;
      if (rest < 0) {
        ascii = -1 * rest + 96;
      }
    }
    answer += String.fromCharCode(ascii);
  }

  return answer;
}
