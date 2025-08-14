# 📚 JavaScript Array Methods — Complete Reference (ES2022+)

This document lists all major JavaScript array methods (including ES6+ and ES2022 features) with explanations and examples.

---

## Creating Arrays
```javascript
const arr1 = [1, 2, 3];              // Array literal
const arr2 = new Array(3);           // [empty × 3]
const arr3 = Array.of(1, 2, 3);      // [1, 2, 3]
const arr4 = Array.from("hello");    // ["h", "e", "l", "l", "o"]
```

---

## Checking & Searching
```javascript
[1, 2, 3].includes(2);         // true
[1, 2, 3].indexOf(2);          // 1
[1, 2, 3].lastIndexOf(2);      // 1
[1, 2, 3].find(x => x > 2);    // 3
[1, 2, 3].findIndex(x => x > 2); // 2
[1, 2, NaN].includes(NaN);     // true
```

---

## Adding & Removing Elements
```javascript
const arr = [1, 2, 3];

arr.push(4);       // [1, 2, 3, 4] → returns new length (4)
arr.pop();         // [1, 2, 3] → removes last element
arr.unshift(0);    // [0, 1, 2, 3]
arr.shift();       // [1, 2, 3] → removes first element
arr.splice(1, 1);  // [1, 3] → remove element at index 1
arr.splice(1, 0, 2); // [1, 2, 3] → insert element
```

---

## Copying & Filling
```javascript
[1, 2, 3].slice(1, 3);     // [2, 3] → shallow copy part
[1, 2, 3].concat([4, 5]);  // [1, 2, 3, 4, 5]
[1, 2, 3].fill(0, 1, 3);   // [1, 0, 0]
[1, 2, 3].copyWithin(0, 2); // [3, 2, 3]
```

---

## Iterating
```javascript
[1, 2, 3].forEach(x => console.log(x));  // logs 1, 2, 3
[1, 2, 3].map(x => x * 2);               // [2, 4, 6]
[1, 2, 3].filter(x => x > 1);            // [2, 3]
[1, 2, 3].reduce((a, b) => a + b, 0);    // 6
[1, 2, 3].reduceRight((a, b) => a - b);  // 0
```

---

## Testing Conditions
```javascript
[1, 2, 3].every(x => x > 0);  // true
[1, 2, 3].some(x => x > 2);   // true
```

---

## Sorting & Reversing
```javascript
[3, 1, 2].sort();             // [1, 2, 3] (string comparison by default)
[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3] (numeric sort)
[1, 2, 3].reverse();          // [3, 2, 1]
```

---

## Flattening & Combining
```javascript
[1, [2, 3]].flat();           // [1, 2, 3]
[1, [2, [3]]].flat(2);        // [1, 2, 3]
[1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

---

## Converting & Joining
```javascript
[1, 2, 3].join("-");          // "1-2-3"
[1, 2, 3].toString();         // "1,2,3"
[1, 2, 3].toLocaleString();   // depends on locale
```

---

## ES2022+ Additions
```javascript
// at() → allows negative indexing
[10, 20, 30].at(-1); // 30

// findLast() → last matching element
[1, 2, 3, 4].findLast(x => x % 2 === 0); // 4

// findLastIndex() → last matching index
[1, 2, 3, 4].findLastIndex(x => x % 2 === 0); // 3
```

---

## Creating from Iterables
```javascript
Array.from("foo");         // ["f", "o", "o"]
Array.of(1, 2, 3);         // [1, 2, 3]
```

---

## Notes
- Arrays are **mutable** — methods like `push`, `pop`, `splice` modify the original.
- Methods like `map`, `filter`, `slice` return **new arrays**.
- Use `at()` for cleaner negative index access (ES2022+).
- Use `findLast` and `findLastIndex` for reverse searching (ES2022+).