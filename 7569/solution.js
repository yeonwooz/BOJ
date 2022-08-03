main();

function main() {
  let [meta, serialized] = getInputs();
  //   console.log(arr)
  const M = meta[0];
  const N = meta[1];
  const H = meta[2];
  let idx = 0;
  let tomato = new Array(H);
  let ripeTomato = new Array(H);
  // 높이
  for (let i = 0; i < H; ++i) {
    tomato[i] = new Array(N);
    ripeTomato[i] = new Array(N);
    // row
    for (let j = 0; j < N; ++j) {
      tomato[i][j] = new Array(M);
      ripeTomato[i][j] = new Array(M);
      // col
      for (let k = 0; k < M; ++k) {
        tomato[i][j][k] = serialized[idx++];
        ripeTomato[i][j][k] = 0;
        // console.log(tomato[i][j][k]);
      }
      //   console.log();
    }
    // console.log();
  }

  solve(M, N, H, tomato, ripeTomato);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [meta, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");

  meta = meta.split(" ").map((n) => Number(n));

  let serialized = [];
  arr = arr.map((row) => row.split(" ").map((n) => Number(n)));
  let rows = arr.length;
  let cols = arr[0].length;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      serialized.push(arr[i][j]);
    }
  }
  return [meta, serialized];
}

function solve(M, N, H, tomato, ripeTomato) {
  const queue = [];
  const moveBox = [0, 0, 0, 0, -1, 1]; // 동 서 남 북 앞 뒤
  const moveRow = [0, 0, 1, -1, 0, 0]; // 동 서 남 북 앞 뒤
  const moveCol = [1, -1, 0, 0, 0, 0]; // 동 서 남 북 앞 뒤

  function rangeCheck(box, row, col) {
    if (box >= 0 && box < H && row >= 0 && row < N && col >= 0 && col < M) {
      return true;
    }
    return false;
  }

  function BFS(queue) {
    let result;
    let number = 0;
    while (number != queue.length) {
      const b = queue[number][0];
      const r = queue[number][1];
      const c = queue[number][2];

      for (let d = 0; d < 6; ++d) {
        const nextBox = b + moveBox[d];
        const nextRow = r + moveRow[d];
        const nextCol = c + moveCol[d];

        if (
          rangeCheck(nextBox, nextRow, nextCol) &&
          ripeTomato[nextBox][nextRow][nextCol] === 0 &&
          tomato[nextBox][nextRow][nextCol] === 0
        ) {
          queue.push([nextBox, nextRow, nextCol]);
          ripeTomato[nextBox][nextRow][nextCol] = ripeTomato[b][r][c] + 1;
          result = ripeTomato[nextBox][nextRow][nextCol];
        }
      }
      ++number;
    }
    return result - 1;
  }

  let zero = false;
  for (let b = 0; b < H; b++) {
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < M; c++) {
        if (tomato[b][r][c] === 1) {
          queue.push([b, r, c]);
          ripeTomato[b][r][c] = 1;
        }
        if (tomato[b][r][c] === -1) {
          ripeTomato[b][r][c] = -1;
        }
        if (tomato[b][r][c] === 0) {
          zero = true;
        }
      }
    }
  }

  let answer;

  if (!zero) {
    answer = 0;
  } else {
    answer = BFS(queue);

    for (let b = 0; b < H; b++) {
      for (let r = 0; r < N; r++) {
        for (let c = 0; c < M; c++) {
          if (ripeTomato[b][r][c] === 0) {
            answer = -1;
            break;
          }
        }
      }
    }
  }
  console.log(answer);
}

// https://nyang-in.tistory.com/238  웹 참고함 => 다시 풀기
