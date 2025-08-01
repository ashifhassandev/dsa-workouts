// Trie implementation

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      node = node.children[char];
    }

    node.endOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }

    return node.endOfWord;
  }

  startsWithPrefix(prefix) {
    let node = this.root;

    for (const char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }

    return true;
  }

  searchPrefix(prefix) {
    let node = this.root;

    for (const char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }

    return node;
  }

  dfs(node, prefix, result) {
    if (node.endOfWord) result.push(prefix);

    for (const char in node.children) {
      this.dfs(node.children[char], prefix + char, result);
    }
  }

  autoComplete(prefix) {
    const result = [];

    const node = this.searchPrefix(prefix);
    if (!node) return result;

    this.dfs(node, prefix, result);

    return result;
  }
}

const trie = new Trie();

trie.insert("Apple");
trie.insert("App");
trie.insert("Ape");
trie.insert("Orange");
trie.insert("Owl");

console.log(trie.search("Ape"));
console.log(trie.search("Ant"));
console.log(trie.startsWithPrefix("Oran"));
console.log(trie.autoComplete("App"));