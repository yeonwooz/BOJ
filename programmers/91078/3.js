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
    // 오른쪽에서 넣기 (이전 tail의 next에 연결하기)
    const node = new Node(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    // 왼쪽에서 빼기
    if (!this.head) return null;
    const popped = this.head;
    this.head = this.head.next;
    return popped;
  }

  peek() {
    // 헤드 리턴
    return this.head;
  }
}

function solution(priorities, location) {
  // queue는 shift연산이 아닌, 실제 queue를 만들어서 푸는 게 성능에 유리
  const q = new Queue();
  let printOrder = 0;
  for (let i = 0; i < priorities.length; ++i) {
    q.enqueue([priorities[i], i]); // [우선순위, 인덱스]
  }

  priorities.sort((a, b) => b - a); // 우선순위 순으로 정렬

  while (q.peek()) {
    const [priority, idx] = q.dequeue().value;
    if (priority === priorities[printOrder]) {
      if (idx === location) break;
      printOrder++;
    } else {
      q.enqueue([priority, idx]);
    }
  }
  return printOrder + 1; // 0번째부터 셌으므로 +1
}
