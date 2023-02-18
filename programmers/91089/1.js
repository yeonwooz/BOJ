class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(str) {
    let curNode = this.root;
    for (let char of str) {
      if (!curNode.children.has(char)) {
        curNode.children.set(char, {
          node: new Node(curNode.value + char),
          cnt: 1,
        });
      } else {
        curNode.children.get(char).cnt++;
      }
      curNode = curNode.children.get(char).node;
    }
  }

  has(str, arr) {
    let curNode = this.root;
    let newArr = [...arr];
    for (let char of str) {
      const children = curNode.children;
      newArr.push(children.get(char).cnt);
      if (!children.has(char, newArr)) return null;
      curNode = children.get(char).node;
    }
    return newArr;
  }
}

function solution(words) {
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  let answer = 0;
  for (let word of words) {
    const arr = trie.has(word, []);
    for (let cnt of arr) {
      if (cnt > 1) answer++;
      if (cnt === 1) {
        answer++;
        break;
      }
    }
  }
  return answer;
}
