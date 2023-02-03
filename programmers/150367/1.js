function solution(numbers) {
  let answer = [];
  for (let num of numbers) {
    answer.push(check(num));
  }
  return answer;
}

function check(num) {
  const b1 = num.toString(2);
  const b2 = "0" + b1;

  const l1 = b1.length;
  const l2 = l1 + 1;

  let binstr = null;
  let len = 0;
  if (!((l1 + 1) & l1)) {
    binstr = b1;
    len = l1;
  }

  if (!((l2 + 1) & l2)) {
    binstr = b2;
    len = l2;
  }
  if (binstr === null) return 0;

  return recur(binstr);
  // 재귀로 반씩 자르기
}

function recur(str) {
  const len = str.length;
  if (len === 1) {
    return 1;
  }
  if (len === 3) {
    if (str[1] === "0") return 0;
    return 1;
  }

  const midIdx = Math.floor(len / 2);
  if (str[midIdx] === "0") return 0;

  let res1 = recur(str.slice(0, midIdx));
  let res2 = recur(str.slice(midIdx + 1));

  return res1 && res2;
}
