function solution(clothes) {
  const clothesMap = new Map();
  for (let arr of clothes) {
    const [name, type] = arr;
    if (!clothesMap.get(type)) {
      clothesMap.set(type, [name]);
    } else {
      clothesMap.get(type).push(name);
    }
  }
  // console.log(clothesMap)

  // 전체조합의 곱 - 아무것도 안입는 경우 1
  // const result = combination([1,2,3],2)
  let combcnt = 1;
  for (let [type, items] of clothesMap) {
    let cnt = 1 + combination(items, 1).length;
    combcnt *= cnt;
  }
  return combcnt - 1;
}

function combination(arr, cnt) {
  const result = [];
  if (cnt === 1) return arr.map((v) => v);

  arr.forEach((value, index, arr) => {
    // console.log(value, index, arr)
    const fixed = value;
    const restArr = arr.slice(index + 1);
    const combinationArr = combination(restArr, cnt - 1);

    const combined = combinationArr.map((comb) => fixed + comb);
    result.push(...combined);
  });
  return result;
}
