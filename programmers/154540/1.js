// DFS

function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    const visited = Array.from(Array(n), ()=>Array(m).fill(0))
    
    const dr = [-1,1,0,0]
    const dc = [0,0,1,-1]

    const sums = []
    for (let i = 0; i < n; ++i) {   
        for (let j = 0; j < m; ++j) {
            if (!visited[i][j] && maps[i][j] !== 'X') {            
                sums.push(DFS(i,j, parseInt(maps[i][j])))
            }
        }
    }
    
    return sums.length ? sums.sort((a,b) => a-b) : [-1]
    
    function DFS(i,j,sum) {
        visited[i][j] = 1
        for (let idx= 0; idx < 4; ++idx) {
            const nr = dr[idx] + i
            const nc = dc[idx] + j
            
            if (0 <= nr && nr < n && 0 <= nc && nc < m && !visited[nr][nc] && maps[nr][nc] !== 'X') {
                sum = DFS(nr,nc, sum + parseInt(maps[nr][nc]))
            }
        }
        return sum    
    }
}

