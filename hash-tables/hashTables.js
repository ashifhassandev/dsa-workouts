// 1. Basic Hash Table with Separate Chaining:

class HashTables {
    constructor(size) {
        this.table = Array.from({ length: size }, () => []);
        this.size = size;
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i  < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }

        return hashValue % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return undefined;
    }

    delete(key) {
        const index = this.hash(key);
        return this.table[index].filter(pair => pair[0] !== key);
    }

    display() {
        console.log(this.table);
    }
};

const hashTable = new HashTables(10);

hashTable.set("name", "Ashif");
hashTable.set("age", 28);
hashTable.set("location", "Kuzhivelipady");

console.log(hashTable.get("location"));


// 2. Detecting Duplicate Elements Using a Hash Table:

const array = [2, 5, 6, 6, 7, 8, 7, 7, 9, 13, 5];

const findDuplicates = (arr) => {
    const seen = new Set();
    const duplicates = [];

    for (let i of arr) {
        if (seen.has(i) && !(duplicates.includes(i))) {
            duplicates.push(i);
        } else {
            seen.add(i);
        }
    }

    return duplicates;
};

console.log(findDuplicates(array));


// 3. Implementing Open Addressing with Linear Probing:

class HashTable {
    constructor(size) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }

        return hashValue % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        while (this.table[index] !== null && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
        }

        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }

            index = (index + 1) % this.size;
            if (index === start) break;
        }

        return undefined;
    }

    delete(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index] = null;
            }

            index = (index + 1) % this.size;
            if (index === start) break;
        }
    }

    display() {
        console.log(this.table);
    }
};

const hashTable1 = new HashTable(5);

hashTable1.set("name", "Ashif");
hashTable1.set("Age", 28);
hashTable1.set("location", "Kuzhivelipady");

console.log(hashTable1.get("location"));
hashTable1.delete("location");

hashTable1.display();