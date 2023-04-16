// https://school.programmers.co.kr/learn/courses/30/lessons/181187/solution_groups?language=javascript
function solution(r1, r2) {
  var answer = 0;
  for (var x = 1; x <= r2; x++) {
    var min = r1 >= x ? Math.ceil(Math.sqrt(r1 * r1 - x * x)) : 0;
    var max = Math.floor(Math.sqrt(r2 * r2 - x * x));
    answer += max - min + 1;
  }
  return 4 * answer;
}
