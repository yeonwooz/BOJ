function solution(numbers) {
  let answer = [];
  for (let num of numbers) {
    const binstr = num.toString(2);
    answer.push(check(0, binstr.length - 1, binstr) ? 1 : 0);
  }
  return answer;
}

function check(start, end, str) {
  if (start === end) return str[start];

  const mid = parseInt((start + end) / 2);
  if (mid === start || mid === end) return str[mid];
  const left = check(start, mid - 1, str);
  if (!left) return false;
  if (str[mid] === "0" && left === "1") return false;

  const right = check(mid + 1, end, str);
  if (!right) return false;
  if (str[mid] === "0" && right === "1") return false;

  if (str[mid] === "0" && left === "0" && right === "0") return "0";
  return "1";
}
