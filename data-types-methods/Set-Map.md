# 🔑 JavaScript Set & Map Methods — Complete Reference (ES2022+)

This document lists all major JavaScript **Set** and **Map** methods with explanations and examples.

---

## 🟢 Set (Unique Value Collection)

A **Set** stores unique values of any type (primitive or object reference).

### Creating a Set
```javascript
const set1 = new Set();                   // Empty set
const set2 = new Set([1, 2, 3, 3]);        // {1, 2, 3} (duplicates removed)
```

---

### Adding, Checking, and Deleting
```javascript
const s = new Set();

s.add(1);      // {1}
s.add(2);      // {1, 2}
s.has(1);      // true
s.has(3);      // false
s.delete(2);   // true (removed)
s.size;        // 1
```

---

### Iterating Over a Set
```javascript
const s2 = new Set(["a", "b", "c"]);

for (let value of s2) {
  console.log(value); // "a", "b", "c"
}

s2.forEach(v => console.log(v)); // Same as above
```

---

### Converting Between Sets & Arrays
```javascript
const arr = [1, 2, 2, 3];
const uniqueArr = [...new Set(arr)];  // [1, 2, 3]

const setFromArr = new Set(arr);
const arrFromSet = Array.from(setFromArr); // [1, 2, 3]
```

---

### Clearing a Set
```javascript
s2.clear();  // Removes all elements
```

---

## 🟡 Map (Key-Value Pairs)

A **Map** stores key-value pairs and remembers the original insertion order of keys. Keys can be any type.

### Creating a Map
```javascript
const map1 = new Map();                               // Empty map
const map2 = new Map([["a", 1], ["b", 2]]);           // From array of pairs
```

---

### Adding, Retrieving, and Deleting
```javascript
const m = new Map();

m.set("name", "Alice");
m.set(42, "The answer");
m.set({ id: 1 }, "Object key");

m.get("name");        // "Alice"
m.has(42);            // true
m.delete("name");     // true
m.size;               // 2
```

---

### Iterating Over a Map
```javascript
const m2 = new Map([["a", 1], ["b", 2]]);

for (let [key, value] of m2) {
  console.log(key, value); // "a" 1, "b" 2
}

m2.forEach((value, key) => console.log(key, value));
```

---

### Map Views
```javascript
[...m2.keys()];    // ["a", "b"]
[...m2.values()];  // [1, 2]
[...m2.entries()]; // [["a", 1], ["b", 2]]
```

---

### Clearing a Map
```javascript
m2.clear(); // Removes all entries
```

---

## 🔹 WeakSet & WeakMap (Special Cases)

- **WeakSet**: Like Set, but only stores **objects** (no primitives) and is **weakly referenced** (garbage-collected).
- **WeakMap**: Like Map, but keys must be **objects** and are weakly referenced.

### WeakSet Example
```javascript
let obj1 = { id: 1 };
let ws = new WeakSet();

ws.add(obj1);
ws.has(obj1); // true
ws.delete(obj1);
```

### WeakMap Example
```javascript
let wm = new WeakMap();
let keyObj = {};

wm.set(keyObj, "secret");
wm.get(keyObj); // "secret"
```

---

## Notes
- **Set** is best for removing duplicates or checking existence.
- **Map** is better than plain objects when keys are not strings or when insertion order matters.
- **WeakSet** / **WeakMap** do not have `.size` or iteration methods because keys/values may disappear at any time due to garbage collection.