function solution(elements) {
  const extended = [...elements, ...elements];
  const sumSet = new Set();
  let cnt = 1;
  while (cnt <= elements.length) {
    for (let start = 0; start < elements.length; ++start) {
      let end = start + (cnt - 1);
      let sum = 0;
      for (let idx = start; idx <= end; ++idx) {
        sum += extended[idx];
      }
      sumSet.add(sum);
    }

    cnt++;
  }
  return sumSet.size;
}
