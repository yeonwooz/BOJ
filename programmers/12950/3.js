function solution(arr1, arr2) {
  return arr1.map((arr, i) => arr.map((val, j) => val + arr2[i][j]));
}
