function solution(s) {
  const len = s.length;
  return (
    (len === 4 || len === 6) &&
    !isNaN(Number(s)) &&
    !s.split("").includes("e") &&
    !s.split("").includes("E")
  );
}
