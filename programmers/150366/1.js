function solution(commands) {
  const valuemap = new Map(); // ex. value1, ["2_3", "3_4"] -> indexof, splice로 제거 / push로 삽입

  let table = Array(51);

  for (var i = 0; i < 51; i++) {
    table[i] = new Array(51).fill([""]);
  }

  const answer = [];

  for (let str of commands) {
    let cmd, r, c, r1, c1, r2, c2, value, value1, value2;

    const arr = str.split(" ");
    switch (arr[0]) {
      case "PRINT":
        [cmd, r, c] = arr;
        const currentCell = table[r][c];
        const currentValue = currentCell[currentCell.length - 1];
        answer.push(currentValue === "" ? "EMPTY" : currentValue);
        break;

      case "UPDATE":
        if (arr.length === 4) {
          [cmd, r, c, value] = arr;
          table[r][c].pop();
          table[r][c].push(value);

          const curCell = r + "_" + c;
          if (!valuemap.get(value)) {
            valuemap.set(value, [curCell]);
          } else {
            valuemap.get(value).push(curCell);
          }
        } else if (arr.length === 3) {
          const [cmd, value1, value2] = arr;

          const valArr = valuemap.get(value1);
          if (!valArr) break;
          for (let i = valArr.length - 1; i >= 0; --i) {
            const val = valArr[i];
            const [r, c] = val.split("_").map((x) => parseInt(x));
            table[r][c].pop();
            table[r][c].push(value2);
            valArr.splice(i, 1);

            if (!valuemap.get(value2)) {
              valuemap.set(value2, [val]);
            } else {
              valuemap.get(value2).push(val);
            }
          }
        }
        break;

      case "MERGE":
        [cmd, r1, c1, r2, c2] = arr;

        if (r1 === r2 && c1 === c2) break;
        const cell1 = table[r1][c1];
        const cell2 = table[r2][c2];

        const value1 = cell1[cell1.length - 1];
        const value2 = cell2[cell2.length - 1];

        if (value1 && !value2) {
          table[r2][c2].push(value1);

          const curCell = r2 + "_" + c2;
          if (!valuemap.get(value1)) {
            valuemap.set(value1, [curCell]);
          } else {
            valuemap.get(value1).push(curCell);
          }
        } else if (!value1 && value2) {
          table[r1][c1].push(value2);

          const curCell = r1 + "_" + c1;
          if (!valuemap.get(value2)) {
            valuemap.set(value2, [curCell]);
          } else {
            valuemap.get(value2).push(curCell);
          }
        } else if (value1 && value2) {
          table[r2][c2].push(value1);

          const curCell = r2 + "_" + c2;
          if (!valuemap.get(value1)) {
            valuemap.set(value1, [curCell]);
          } else {
            valuemap.get(value1).push(curCell);
          }

          // value2 맵에서 curCell 제거
          const index = valuemap.get(value2).indexOf(curCell);
          valuemap.get(value2).splice(index, 1);
        }

        break;

      case "UNMERGE":
        [cmd, r, c] = arr;
        const targetCellVal = table[r][c];
        if (targetCellVal.length === 0) break;

        const curVal = targetCellVal[targetCellVal.length - 1];

        const valArr = valuemap.get(curVal);
        if (!valArr) break;
        for (let i = valArr.length - 1; i >= 0; --i) {
          const val = valArr[i];
          const [x, y] = val.split("_").map((s) => parseInt(s));
          if (x === r && y === c) continue;

          const cellVal = table[x][y];
          table[x][y] = [""];
          valArr.splice(i, 1);
        }

        break;
    }
  }
  return answer;
}
