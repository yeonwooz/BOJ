function solution(s) {
  let flag = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "p" || s[i] === "P") flag++;
    if (s[i] === "y" || s[i] === "Y") flag--;
  }
  return flag === 0;
}
