# 📦 JavaScript JSON Methods — Complete Reference

This document covers JavaScript’s built-in **JSON object** methods for working with data in JSON (JavaScript Object Notation) format.

---

## JSON Overview
- **JSON** is a lightweight data-interchange format.
- Syntax is a subset of JavaScript object notation.
- Data is stored as key-value pairs, with keys in double quotes.
- Commonly used for APIs, configuration files, and data storage.

---

## `JSON.stringify()` — Convert JS to JSON string

```javascript
const obj = { name: "Alice", age: 25 };

const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice","age":25}'
```

---

### Pretty-Printing JSON
```javascript
JSON.stringify(obj, null, 2);
/*
{
  "name": "Alice",
  "age": 25
}
*/
```

---

### Filtering Keys with `replacer`
```javascript
const filtered = JSON.stringify(obj, ["name"]);
console.log(filtered); // '{"name":"Alice"}'
```

---

### Using a Replacer Function
```javascript
const replaced = JSON.stringify(obj, (key, value) =>
  typeof value === "number" ? value * 2 : value
);
console.log(replaced); // '{"name":"Alice","age":50}'
```

---

## `JSON.parse()` — Convert JSON string to JS object

```javascript
const jsonStr = '{"name":"Bob","age":30}';
const parsedObj = JSON.parse(jsonStr);
console.log(parsedObj.name); // "Bob"
```

---

### Parsing with a Reviver Function
```javascript
const revived = JSON.parse(jsonStr, (key, value) =>
  typeof value === "number" ? value + 1 : value
);
console.log(revived); // { name: "Bob", age: 31 }
```

---

## Common Pitfalls
```javascript
// JSON keys must be in double quotes
'{name: "Alice"}' // ❌ invalid JSON

// Single quotes not allowed for strings
"{'name': 'Alice'}" // ❌ invalid JSON
```

---

## Converting Arrays to JSON
```javascript
const arr = [1, 2, 3];
console.log(JSON.stringify(arr)); // "[1,2,3]"
```

---

## Notes
- `JSON.stringify()` ignores functions, `undefined`, and `Symbol` properties.
- Circular references cause `JSON.stringify()` to throw an error.
- Use `try...catch` when parsing JSON from external sources.
- JSON format does **not** support comments.