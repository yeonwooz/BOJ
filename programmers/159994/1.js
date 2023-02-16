function solution(cards1, cards2, goal) {
  let len1 = cards1.length;
  let len2 = cards2.length;
  let goalLen = goal.length;

  while (goalLen && (len1 || len2)) {
    if (cards1[0] === goal[0]) {
      cards1.shift();
      goal.shift();
      len1--;
      goalLen--;
    } else if (cards2[0] === goal[0]) {
      cards2.shift();
      goal.shift();
      len2--;
      goalLen--;
    } else {
      break;
    }
  }
  if (!goalLen) return "Yes";

  while (len1 && goalLen) {
    if (cards1[0] === goal[0]) {
      cards1.shift();
      goal.shift();
      len1--;
      goalLen--;
    } else break;
  }
  while (len2 && goalLen) {
    if (cards2[0] === goal[0]) {
      cards2.shift();
      goal.shift();
      len2--;
      goalLen--;
    } else break;
  }
  return goalLen ? "No" : "Yes";
}
