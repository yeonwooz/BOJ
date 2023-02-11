function solution(brown, yellow) {
  let w, h;
  for (h = 3; h <= (brown + yellow) / h; h++) {
    w = Math.floor((brown + yellow) / h);
    if ((w - 2) * (h - 2) === yellow) {
      break;
    }
  }
  return [w, h];
}
