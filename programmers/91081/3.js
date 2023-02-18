function solution(genres, plays) {
  const genreMap = new Map(); // genre이름 : [{id:play} 배열, totalPlaycnt]
  for (let id = 0; id < genres.length; ++id) {
    const genreName = genres[id];
    if (!genreMap.get(genreName)) {
      genreMap.set(genreName, {
        songs: [{ id: id, playCnt: plays[id] }],
        totalPlaycnt: plays[id],
      });
    } else {
      genreMap.get(genreName).totalPlaycnt += plays[id];
      genreMap.get(genreName).songs = [
        ...genreMap.get(genreName).songs,
        { id: id, playCnt: plays[id] },
      ]
        .sort((a, b) => b.playCnt - a.playCnt)
        .slice(0, 2);
    }
  }

  return Array.from(genreMap.entries())
    .sort((a, b) => b[1].totalPlaycnt - a[1].totalPlaycnt)
    .flatMap((songInfo) => songInfo[1].songs)
    .map((v) => v.id);
}
