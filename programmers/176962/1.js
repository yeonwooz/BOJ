// https://school.programmers.co.kr/questions/46626
function solution(plans) {
  const answer = [];
  const hashMap = new Map();

  plans.forEach(plan => {
    plan[1] = getMin(plan[1]);
    plan[2] = +plan[2];
    hashMap.set(plan[1], [plan[2], plan[0]]);
  });
  plans.sort((a, b) => a[1] - b[1]);

  let start = plans[0][1];
  let stack = []; // 진행중인 과제들

  const totalCnt = plans.length;
  let cnt = 0;
  while (cnt < totalCnt) {
    if (stack.length) {
      // 진행중인 과제가 있는 경우
      const len = stack.length;
      stack[len - 1][0]--; // 가장 최근에 시작한 과제를 수행
      if (stack[len - 1][0] === 0) {
        answer.push(stack[len - 1][1]);
        stack.pop();
        cnt++;
      }
    }

    const nextTask = hashMap.get(start);
    if (nextTask) {
      stack.push(nextTask);
    }
    start++;
  }

  return answer;
}

function getMin(time) {
  const [hh, mm] = time.split(":").map(n => +n);
  return hh * 60 + mm;
}
