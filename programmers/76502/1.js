function solution(s) {
  // 왼쪽으로 회전시킨만큼 startIdx가 오른쪽으로 이동한다. endIdx는 (startIdx + 회전수) % s.length
  let answer = 0;
  if (isCorrect(s)) answer++;
  for (let rotateCnt = 1; rotateCnt < s.length; ++rotateCnt) {
    const startIdx = rotateCnt;
    const endIdx = (startIdx + (s.length - 1)) % s.length;
    const rotatedStr = s.slice(startIdx) + s.slice(0, endIdx + 1);
    if (isCorrect(rotatedStr)) answer++;
  }
  return answer;
}

function isCorrect(s) {
  let stack1 = 0; // ()
  let stack2 = 0; // []
  let stack3 = 0; // {}
  const allStack = [];
  for (let i = 0; i < s.length; ++i) {
    if (stack1 <= 0 && s[i] === ")") return false;
    if (stack2 <= 0 && s[i] === "]") return false;
    if (stack3 <= 0 && s[i] === "}") return false;
    if (allStack[allStack.length - 1] === "(" && (s[i] === "]" || s[i] === "}"))
      return false;
    if (allStack[allStack.length - 1] === "[" && (s[i] === ")" || s[i] === "}"))
      return false;
    if (allStack[allStack.length - 1] === "{" && (s[i] === ")" || s[i] === "]"))
      return false;

    if (s[i] === "(") {
      stack1++;
      allStack.push(s[i]);
    }
    if (s[i] === "[") {
      stack2++;
      allStack.push(s[i]);
    }
    if (s[i] === "{") {
      stack3++;
      allStack.push(s[i]);
    }

    if (s[i] === ")") {
      stack1--;
      allStack.pop();
    }
    if (s[i] === "]") {
      stack2--;
      allStack.pop();
    }
    if (s[i] === "}") {
      stack3--;
      allStack.pop();
    }
  }

  return stack1 === 0 && stack2 === 0 && stack3 === 0;
}
