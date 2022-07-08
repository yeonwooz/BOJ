const num = getInputs();
let board = Array.from(num).fill(0); // 한줄에 1개씩밖에 못 놓음. 각 인덱스가 열번호를 가리키고, value가 퀸이 위치한 행번호를 가리키도록 할 것임
let cnt = 0;
solve(num);
console.log(cnt);

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const num = fs.readFileSync(filepath).toString();
  return parseInt(num);
}

function solve(n) {
  // 시작할 수 있는 위치는 0행의 각 열, 총n개이다
  for (let i = 0; i < n; ++i) {
    board[0] = i;
    nQueen(n, 1);
  }
}

function nQueen(n, col_cnt) {
  if (col_cnt === n) {
    ++cnt;
    return;
  }

  for (let i = 0; i < n; ++i) {
    // 모든 행에 대해서
    let check = true;
    for (let j = 0; j < col_cnt; ++j) {
      // col_cnt보다 작은 모든 열에 대해서
      board[col_cnt] = i; // 일단 이 열의 i행에 퀸을 놓았다고 치고,
      if (
        board[j] == board[col_cnt] || // 이미 앞의 열에서 같은 행에 놓아져있거나
        j - col_cnt == board[j] - board[col_cnt] || // 대각선 아래거나
        j - col_cnt == board[col_cnt] - board[j] // 대각선 위거나
      ) {
        check = false;
        break;
      }
    }

    if (check)
      // 그 열은 놓아도 됐던 열이다
      nQueen(n, col_cnt + 1);
  }
}
