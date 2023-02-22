function solution(rectangle, characterX, characterY, itemX, itemY) {
    // x1 x2좌표 사이, y1 y2좌표사이에 위치한 점들을 살펴본다
    // x만 같고 y만 다르면서 둘 사이에 다른 점이 없다면 -> 진행
    // y만 같고 x만 다르면서 둘 사이에 다른 점이 없다면 -> 진행
    const visited = Array.from(Array(51), ()=>Array(51).fill(0))
    let minDist = Infinity
    visited[characterX][characterY] = 1
    DFS(characterX, characterY, 0)
    function DFS(i,j,dist) {
        if (i===itemX && j===itemY) {
            minDist = Math.min(minDist, dist)
            return
        }
        for (const [x1,y1,x2,y2] of rectangle) {
            // 가능한 조합 x1y1   x2y2  x1y2   x2y1
            if (i===x1 && j!==y1) {
                if ()
            } else if (i===x2 && j!==y2) {
                
            } else if (i!==x1 && j===y1) {
                
            } else if (i!==x2 && j===y2) {
                
            } 
        }
    }
    
    return minDist
}