function solution(s) {
  const stack = [];
  let len = stack.length;
  for (let c of s) {
    if (stack[len - 1] === ")") return false;
    if (stack[len - 1] === "(" && c === ")") {
      len--;
      stack.pop();
    } else {
      len++;
      stack.push(c);
    }
  }
  return stack.length === 0;
}
