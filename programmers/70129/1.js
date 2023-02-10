function solution(s) {
  const answer = [0, 0];
  while (s !== "1") {
    s = convBin(s, answer);
  }
  return answer;
}

function convBin(x, answer) {
  const convertedLen = x.split("").filter((x) => x === "1").length;
  answer[0]++;
  answer[1] += x.length - convertedLen;
  return convertedLen.toString(2);
}
