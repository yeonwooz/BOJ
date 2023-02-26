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
    this.size = 0;
  }

  getHeadValue() {
    if (!this.head) return null;
    return this.head.value;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else if (!this.tail) {
      this.tail = newNode;
      this.head.next = this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) return null;
    const poppedValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    return poppedValue;
  }

  isEmpty() {
    return this.head === null;
  }

  peek() {
    if (this.head) return this.head;
    return null;
  }
}

function solution(bridge_length, weight, truck_weights) {
  const waitQ = new Queue();
  const bridgeQ = [];
  for (const w of truck_weights) {
    waitQ.enqueue(w);
  }

  let leftSpace = bridge_length; // 남은 자리 수
  let leftWeight = weight; // 남은 무게 수
  let time = 0;
  while (!waitQ.isEmpty() || bridgeQ.length) {
    if (
      bridgeQ.length === bridge_length ||
      bridgeQ[0]?.lastTime === bridge_length
    ) {
      const truckToExit = bridgeQ.shift();
      leftSpace++;
      leftWeight += truckToExit.waight;
    }

    const headValue = waitQ.getHeadValue();

    if (headValue && leftSpace >= 1 && leftWeight >= headValue) {
      const waightToEnter = waitQ.dequeue();
      bridgeQ.push({
        lastTime: 0,
        waight: waightToEnter,
      });
      leftSpace--;
      leftWeight -= waightToEnter;
    }

    for (let truck of bridgeQ) {
      truck.lastTime++;
    }

    time++;
  }
  return time;
}
