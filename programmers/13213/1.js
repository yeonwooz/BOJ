function solution(n, arr1, arr2) {
  // (9 | 30).toString(2)   =>  11111
  const answer = [];
  for (let i = 0; i < n; ++i) {
    let str = (arr1[i] | arr2[i])
      .toString(2)
      .split("")
      .map((v) => (v === "1" ? "#" : " "))
      .join("");
    str = " ".repeat(n - str.length) + str;
    answer.push(str);
  }
  return answer;
}
