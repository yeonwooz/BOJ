function solution(genres, plays) {
  const genreMap = new Map(); // {genreName: {songNums:[인덱스배열], total: 총 재생 수 }   }
  genres.forEach((value, index) => {
    if (!genreMap.get(value)) {
      genreMap.set(value, {
        songNums: [index],
        total: plays[index],
      });
    } else {
      const prevObj = genreMap.get(value);
      let newArr = [...prevObj.songNums, index].sort((a, b) => {
        if (plays[b] > plays[a]) return 1;
        if (plays[b] === plays[a]) return a - b;
        return -1;
      });
      Object.assign(genreMap.get(value), {
        songNums: newArr.slice(0, 2),
        total: prevObj.total + plays[index],
      });
    }
  });
  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((v) => v[1].songNums);
}
