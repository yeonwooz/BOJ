// 트라이를 구성하되, 각 노드의 children개수를 같이 기록한다
// children개수가 처음으로 1개가 되는 순간 단어입력을 종료해도 된다

class Node {
  constructor(value) {
    this.value = value; // g go gone ...
    this.children = new Map();
    this.branchSize = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node("");
  }

  insert(string) {
    // 이 문자열을 Trie에 넣기
    let cur = this.root;
    for (let c of string) {
      if (!cur.children.has(c)) {
        // 자식노드의 값은 현재노드에 c 가 더해진 것으로 설정
        const nextNode = new Node(cur.value + c);
        nextNode.branchSize++;
        cur.children.set(c, nextNode);
      } else {
        cur.children.get(c).branchSize++;
      }
      cur = cur.children.get(c);
    }
  }

  exist(string) {
    // 현재 이 Trie에 문자열이 존재하는가
    let cur = this.root;
    for (let c of string) {
      if (!cur.children.has(c)) return false;
      cur = cur.children.get(c);
    }
    return true;
  }

  getChildrenSize(string) {
    let cur = this.root;
    for (let c of string) {
      if (!cur.children.has(c)) return 0;
      cur = cur.children.get(c);
    }
    return cur.branchSize;
  }
}

function solution(words) {
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  let cnt = 0;
  for (let word of words) {
    let target = "";
    for (let i = 0; i < word.length; ++i) {
      target += word[i];
      const size = trie.getChildrenSize(target);
      if (size > 1) cnt++;
      else if (size === 1) {
        cnt++;
        break;
      }
    }
  }
  return cnt;
}
