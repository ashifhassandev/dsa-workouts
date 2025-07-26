class HashTable {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
		this.count = 0;
	}

	hash(key) {
		let hash = 0;
		const PRIME = 31;

		for (let i = 0; i < key.length; i++) {
			hash = (hash * PRIME + key.charCodeAt(i)) % this.size;
		}

		return hash;
	}

	set(key, value) {
		const index = this.hash(key);

		if (!this.table[index]) this.table[index] = [];

		for (const pair of this.table[index]) {
			if (pair[0] === key) {
				pair[1] = value;
				return;
			}
		}

		this.table[index].push([key, value]);
		this.count++;

		if ((this.count / this.size) > 0.7) this.resize();
	}

	get(key) {
		const index = this.hash(key);
		const bucket = this.table[index];

		if (bucket) {
			for (const pair of bucket) {
				if (pair[0] === key) return pair[1];
			}
		}

		return undefined;
	}

	remove(key) {
		const index = this.hash(key);
		const bucket = this.table[index];

		if (bucket) {
			for (let i = 0; i < bucket.length; i++) {
				if (bucket[i][0] === key) {
					bucket.splice(i, 1);
					this.count--;
					return true;
				}
			}
		}

		return false;
	}

	display() {
		for (let i = 0; i < this.size; i++) {
			if (this.table[i]) console.log(i, this.table[i]);
		}
	}

	resize() {
		const oldTable = this.table;
		this.size *= 2;
		this.table = new Array(this.size);
		this.count = 0;

		for (const bucket of oldTable) {
			if (bucket) {
				for (const [key, value] of bucket) {
					this.set(key, value);
				}
			}
		}
	}
}

const hashtable = new HashTable(20);

hashtable.set("ashif123", { name: "Ashif", age: 29, location: "Ernakulam" });
hashtable.set("salman123", { name: "Salman", age: 22, location: "Malappuram" });
hashtable.set("safana123", { name: "Safana", age: 28, location: "Kannur" });
hashtable.set("safana123", { name: "Safana", age: 29, location: "Kannur" });

hashtable.display();

console.log(hashtable.get("ashif123"));

hashtable.remove("salman123");

hashtable.display();