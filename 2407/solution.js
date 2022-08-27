main();

function main() {
  const [n, m] = getInputs();
  console.log(solve(n, m));
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [n, m] = fs.readFileSync(filepath).toString().trim().split(" ");
  return [+n, +m];
}

function solve(n, m) {
  let result = 0;
  let select = Array(n).fill(0);
  let arr = Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    arr[i] = i + 1;
  }

  combination(0, 0);

  function combination(head, cnt) {
    if (cnt === m) {
    //   print();
      ++result;
      return;
    }

    for (let i = head; i < n; ++i) {
      if (select[i]) continue;
      select[i] = true;

      combination(i, cnt + 1);
      select[i] = false;
    }
  }
//   function print() {
//     let answer = "";
//     for (let i = 0; i < n; i++) {
//       if (select[i]) {
//         answer += arr[i] + " ";
//       }
//     }
//     console.log(answer);
//   }

    return result;
}
