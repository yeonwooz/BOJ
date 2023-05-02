// https://youngslog.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B4%84%ED%98%B8-%EB%B3%80%ED%99%98-javascript-41a8d53f4faf

function solution(p) {
  function recur(str) {
    if (!str) {
      return "";
    }

    const arr = str.split("");
    const stack = [];
    let l = 0;
    let r = 0;

    while (arr.length) {
      const flag = arr.shift();
      if (flag === "(") {
        l++;
      } else {
        r++;
      }
      stack.push(flag);

      if (l === r) {
        if (stack[0] === "(") {
          return stack.join("") + recur(arr.join(""));
        } else {
          const tmp = "(" + recur(arr.join("")) + ")";
          stack.pop();
          stack.shift();
          return tmp + stack.map(flag => (flag === ")" ? "(" : ")")).join("");
        }
      }
    }
  }
  return recur(p);
}
