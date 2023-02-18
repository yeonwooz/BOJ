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

  has(str, arr) {
    let curNode = this.root;
    let newArr = [...arr];
    for (let char of str) {
      const children = curNode.children;
      newArr.push(children.get(char).children.size);
      if (!children.has(char, newArr)) return null;
      curNode = children.get(char);
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
    console.log("==>", word);
    const arr = trie.has(word, []);
    console.log(arr);
  }
  return answer;
}
