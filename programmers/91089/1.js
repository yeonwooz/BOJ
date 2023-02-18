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
        curNode.children.set(char, new Node(curNode.value + char));
      }
      curNode = curNode.children.get(char);
    }
  }

  has(str) {
    const curNode = this.root;

    for (let char of str) {
      if (!curNode.children.has(char)) return false;
      curNode = curNode.children.get(char);
    }
    return true;
  }

  getChildrenCnt(str) {
    let cnt = 0;
    let curNode = this.root;
    for (let i = 0; i < str.length; ++i) {
      const char = str[i];
      if (curNode.children.entries().length)
        if (!curNode.children.has(char)) {
          curNode.children.set(char, new Node(curNode.value + char));
        }
      if (i === str.length - 1) {
        return curNode.children.entries().length;
      }
      curNode = curNode.children.get(char);
    }
  }
}

function solution(words) {
  const trie = new Trie();
  for (let char of words) {
    trie.insert(char);
  }

  let answer = 0;
  for (let word of words) {
    let prev = "";
    let cnt = 0;
    for (let i = 0; i < word.length; ++i) {
      prev += word[i];
      cnt++;
      if (trie.getChildrenCnt(prev) === 1) break;
    }
    answer += cnt;
  }

  return answer;
}
