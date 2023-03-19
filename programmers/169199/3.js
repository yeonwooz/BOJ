function solution(board) {
    const n = board.length;
    const m = board[0].length;
    let start = [];
    let end = [];
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (board[i][j] === "R") {
                start = [i, j];
            } else if (board[i][j] === "G") {
                end = [i, j];
            }
        }
    }

    const dr = [-1, 1, 0, 0];  // 상하좌우
    const dc = [0, 0, -1, 1];
    // const visitedCorner = Array.from(Array(n), () => Array(m).fill(0));
    let answer = Infinity;
    DFS(start[0], start[1], 0, Array.from(Array(n), () => Array(m).fill(0)))
    

    
    return answer === Infinity ? -1 : answer
    
    function DFS(cur_r, cur_c, moveCnt, visitedCorner) {
        if (board[cur_r][cur_c] === 'G' && moveCnt < answer) {
            answer = moveCnt
            return 
        }          
        
        for (let idx = 0; idx < 4; ++idx) {
            const [moved, pos_r, pos_c] = move(cur_r, cur_c, idx)
            if (visitedCorner[pos_r][pos_c] === 1) continue
            if (moved) {
                visitedCorner[pos_r][pos_c] = 1
                DFS(pos_r, pos_c, moveCnt+1, visitedCorner)
                visitedCorner[pos_r][pos_c] = 0
            }
        }        
    }
    
    function move(cur_i, cur_j, idx) {
        let pos_r = cur_i
        let pos_c = cur_j
        
        const n_r = cur_i + dr[idx];
        const n_c = cur_j + dc[idx];

        let slide = -1;
        let moved = false
        while (
          0 <= n_r + slide * dr[idx] &&
          n_r + slide * dr[idx] < n &&
          0 <= n_c + slide * dc[idx] &&
          n_c + slide * dc[idx] < m &&
          board[n_r + slide * dr[idx]][n_c + slide * dc[idx]] !== "D" 
        ) {
            moved = true
            slide++
        }        
        
        if (moved) {
            slide--
            pos_r = n_r + slide * dr[idx]
            pos_c = n_c + slide * dc[idx]       
        }
        
        return [moved, pos_r, pos_c]
    }    
    
}



