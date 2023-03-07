//  정답참고 https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EA%B8%B0%EB%91%A5%EA%B3%BC-%EB%B3%B4-%EC%84%A4%EC%B9%98-JS

function solution(n, build_frame) {
  // 백트랙킹
  const answer = [];

  for (const [x, y, frame, isInstalled] of build_frame) {
    if (isInstalled) buildFrame(answer, x, y, frame);
    else destroy(answer, x, y, frame);
  }

  return answer.sort((a, b) =>
    a[0] === b[0] ? (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]
  );
}

function buildFrame(arr, x, y, frame) {
  if (frame) {
    if (checkPlate(arr, x, y)) {
      arr.push([x, y, frame]);
    }
  } else {
    if (checkPillar(arr, x, y)) {
      arr.push([x, y, frame]);
    }
  }
}

function checkPillar(arr, x, y) {
  if (y === 0) return true;
  if (arr.find(([a, b, fr]) => a === x && b === y - 1 && fr === 0)) return true;
  if (arr.find(([a, b, fr]) => a === x && b === y && fr === 1)) return true;
  if (arr.find(([a, b, fr]) => a === x - 1 && b === y && fr === 1)) return true;
  return false;
}

function checkPlate(arr, x, y) {
  if (arr.find(([a, b, fr]) => a === x && b === y - 1 && fr === 0)) return true;
  if (arr.find(([a, b, fr]) => a === x + 1 && b === y - 1 && fr === 0))
    return true;
  if (
    arr.find(([a, b, fr]) => a === x + 1 && b === y && fr === 1) &&
    arr.find(([a, b, fr]) => a === x - 1 && b === y && fr === 1)
  )
    return true;
  return false;
}

function destroy(arr, x, y, frame) {
  const arr2 = [...arr];
  const idx = arr.findIndex(([a, b, fr]) => a === x && b === y && fr === frame);

  arr2.splice(idx, 1);

  for (const frs of arr2) {
    const [xpos, ypos, fr] = frs;
    if (fr) {
      if (!checkPlate(arr2, xpos, ypos)) return;
    } else {
      if (!checkPillar(arr2, xpos, ypos)) return;
    }
  }

  arr.splice(idx, 1);
}
