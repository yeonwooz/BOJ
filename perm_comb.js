// 순열, 중복순열, 조합 함수 정리
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

function dup_permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}
