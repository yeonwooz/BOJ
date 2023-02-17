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
  let cnt = 1;
  const q = new Queue();
  let len = priorities.length;
  for (let i = 0; i < len; ++i) {
    q.enqueue([priorities[i], i]);
  }

  while (q.peek()) {
    const popped = q.dequeue();
    let foundBigger = false;
    while (q.head) {
      if (q.head.value > popped[0]) {
        foundBigger = true;
        break;
      }
      q.head = q.head.next;
    }
    if (foundBigger) {
      q.enqueue(popped);
    } else {
      // 출력
      if (popped[1] === location) {
        break;
      }
      cnt++;
    }
  }

  return cnt;
}
