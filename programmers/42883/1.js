function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; ++i) {
    const num = Number(number[i]);
    while (k && arr.length && arr[arr.length - 1] < num) {
      k--;
      arr.pop();
    }
    arr.push(num);
  }

  arr.splice(number.length - k, k);
  return arr.join("");
}
