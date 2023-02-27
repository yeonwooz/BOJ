function solution(array, commands) {
  const answer = [];
  for (const [i, j, k] of commands) {
    answer.push(insertionSort([...array], i - 1, j - 1, k));
  }
  return answer;
}

function insertionSort(arr, s, e, k) {
  for (let i = s; i < e; ++i) {
    let j = i;
    while (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    }
  }
  return arr[s + k - 1];
}


/*
아예 잘라서 넘기면 확실하게 통과함
function solution(array, commands) {
    const answer = []
    for (const [i,j,k] of commands) {
        answer.push(insertionSort(array.slice(i-1,j), k))
    }
    return answer
}

function insertionSort(arr, k) {
    for (let i = 0; i < arr.length-1; ++i) {
        let j = i
        while (arr[j] > arr[j+1]) {
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            j--
        }
    }
    return arr[k-1]
}

*/