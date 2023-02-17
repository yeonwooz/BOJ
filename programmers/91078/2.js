class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    if (this.head) return this.head.value;
    return null;
  }
}

function solution(priorities, location) {
  let cnt = 0;
  const q = new Queue();
  let len = priorities.length;
  for (let i = 0; i < len; ++i) {
    q.enqueue([priorities[i], i]);
  }
  priorities.sort((a, b) => b - a);

  while (q.peek()) {
    const popped = q.dequeue();
    if (popped[0] < priorities[cnt]) {
      q.enqueue(popped);
    } else {
      // 출력
      if (popped[1] === location) {
        break;
      }
      cnt++;
    }
  }

  return cnt + 1;
}
