// 1. Insert and Search Words:

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
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(); 
            }

            node = node.children[char];
        }

        node.endOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return node.endOfWord;
    }
}

const trie1 = new Trie();

trie1.insert("Apple");
trie1.insert("Orange");
trie1.insert("Mango");
trie1.insert("Banana");

console.log(trie1.search("Apple"));
console.log(trie1.search("Apples"));


// 2. Prefix Matching:

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
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(); 
            }

            node = node.children[char];
        }

        node.endOfWord = true;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return true;
    }
}

const trie2 = new Trie();

trie2.insert("Apple");
trie2.insert("Orange");
trie2.insert("Mango");
trie2.insert("Banana");

console.log(trie2.startsWith("App"));
console.log(trie2.startsWith("Ava"));


// 3. Autocomplete Simulation:

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
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(); 
            }

            node = node.children[char];
        }

        node.endOfWord = true;
    }
}

class TrieWithAutoComplete extends Trie{
    collectAllWords(node, prefix, results) {
        if (node.endOfWord) {
            results.push(prefix);
        }

        for (let char in node.children) {
            this.collectAllWords(node.children[char], prefix + char, results);
        }
    }

    autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }

            node = node.children[char];
        }

        const results = [];
        this.collectAllWords(node, prefix, results);
        return results;
    }
}

const trie3 = new TrieWithAutoComplete();

trie3.insert("Car");
trie3.insert("Care");
trie3.insert("Cart");
trie3.insert("Card");
trie3.insert("Cards");
trie3.insert("Bike");
trie3.insert("Bus");

console.log(trie3.autoComplete("Car"));