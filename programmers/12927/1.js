class MaxHeap {
    constructor() {
        this.heap = [null]
    }
    
    push(value) {
        this.heap.push(value)
        let curIdx = this.heap.length - 1
        let parentIdx = Math.floor(curIdx / 2)
        
        while(curIdx > 1) {
            if (this.heap[curIdx] > this.heap[parentIdx]) {
                [this.heap[curIdx],this.heap[parentIdx]] = [this.heap[parentIdx],this.heap[curIdx]]
                curIdx = parentIdx
                parentIdx = Math.floor(curIdx / 2)
            } else break
        }
    }
    
    pop() {
        if (this.heap.length <= 1) return null
        let popped = this.heap[1]
        this.heap[1] = this.heap.pop()
        this.heapify()
        return popped
    }
    
    heapify() {
        let curIdx = 1
        let left = 2
        let right = 3
        
        while (this.heap[curIdx] < this.heap[left] || this.heap[curIdx] < this.heap[right]) {
            if (this.heap[left] < this.heap[right]) {
                [this.heap[right],this.heap[curIdx]] = [this.heap[curIdx],this.heap[right]]
                curIdx = right
            } else {
                [this.heap[left],this.heap[curIdx]] = [this.heap[curIdx],this.heap[left]]
                curIdx = left
            }
            
            left = curIdx * 2
            right = left + 1
        }
    }
    
    isEmpty() {
        return this.heap.length === 1
    }
}

function solution(n, works) {
    const heap = new MaxHeap()
    for (let i = 0; i < works.length; ++i) {
        heap.push(works[i])
    }
    
    while (!heap.isEmpty() && n) {
        const fatigue = heap.pop()
        if (fatigue > 0) heap.push(fatigue - 1)
        n--
    }
    
    return heap.heap.reduce((prev,cur) => prev + cur ** 2, 0)
}