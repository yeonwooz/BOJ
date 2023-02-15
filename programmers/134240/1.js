function solution(food) {
  let left = "";
  const water = "0";
  let right = "";
  for (let i = 1; i < food.length; ++i) {
    const str = (i + "").repeat(Math.floor(food[i] / 2));
    left += str;
    right = str + right;
  }

  return left + water + right;
}
