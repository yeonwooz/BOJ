function solution(sequence, k) {
  const answers = [];
  let s = 0;
  let sum = 0;

  for (let e = 0; e < sequence.length; ++e) {
    sum += sequence[e];
    while (sum > k && s < e) {
      sum -= sequence[s];
      s++;
    }
    if (sum === k) {
      answers.push([s, e]);
    }
  }

  answers.sort((arr1, arr2) => {
    if (arr1[1] - arr1[0] < arr2[1] - arr2[0]) return -1;
    if (arr1[1] - arr1[0] > arr2[1] - arr2[0]) return 1;
    if (arr1[0] < arr2[0]) return -1;
    return 1;
  });

  return answers[0];
}
