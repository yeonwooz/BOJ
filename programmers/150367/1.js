function solution(numbers) {
  let answer = [];
  for (let num of numbers) {
    let binstr = num.toString(2);
    let size = Math.pow(2, Math.floor(Math.log2(binstr.length)) + 1) - 1;
    binstr = "0".repeat(size - binstr.length) + binstr;
    answer.push(check(binstr));
  }
  return answer;
}

function check(str) {
  const mid = (str.length - 1) / 2;
  if (mid === 0) return 1;
  const left = str.substr(0, mid);
  const right = str.substr(mid + 1);

  if (str[mid] === "0") {
    if (left * 1 === 0 && right * 1 === 0) return 1;
    return 0;
  }
  return check(left) && check(right);
}
