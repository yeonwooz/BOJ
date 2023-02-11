function solution(brown, yellow) {
  const total = brown + yellow;
  let yheight = 1;
  let ywidth = yellow;
  let height = yheight + 2;
  let width = total / (yheight + 2);

  while (height <= width) {
    if ((yheight + 2) * (ywidth + 2) === total) return [width, height];

    yheight++;
    ywidth = yellow / yheight;
    while (Math.floor(ywidth) !== ywidth) {
      yheight++;
      ywidth = yellow / yheight;
    }
    height = yheight + 2;
    width = total / height;
  }
}
