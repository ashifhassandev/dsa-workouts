# 📚 JavaScript Object Methods — Complete Reference (ES2022+)

This document lists all major JavaScript object-related methods and utilities (including ES6+ and ES2022 features) with explanations and examples.

---

## Creating Objects
```javascript
const obj1 = { a: 1, b: 2 };           // Object literal
const obj2 = new Object({ a: 1 });     // Constructor
const obj3 = Object.create(null);      // No prototype
```

---

## Getting Keys, Values & Entries
```javascript
const user = { name: "Alice", age: 25 };

Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Alice", 25]
Object.entries(user); // [["name", "Alice"], ["age", 25]]
```

---

## From Entries
```javascript
Object.fromEntries([["name", "Alice"], ["age", 25]]);
// { name: "Alice", age: 25 }
```

---

## Checking Properties
```javascript
"user" in user;                    // true
user.hasOwnProperty("name");       // true
Object.hasOwn(user, "name");       // true (ES2022+ safer check)
```

---

## Assigning & Merging
```javascript
const target = { a: 1 };
const source = { b: 2 };

Object.assign(target, source); // { a: 1, b: 2 }
({ ...target, ...source });    // Spread syntax → { a: 1, b: 2 }
```

---

## Creating from Prototype
```javascript
const proto = { greet() { return "hi"; } };
const obj = Object.create(proto);
obj.greet(); // "hi"
```

---

## Preventing Modifications
```javascript
const car = { brand: "Toyota" };

Object.freeze(car);   // Cannot add/remove/change props
Object.isFrozen(car); // true

Object.seal(car);     // Cannot add/remove, can modify existing
Object.isSealed(car); // true

Object.preventExtensions(car);    // Cannot add new props
Object.isExtensible(car);         // false
```

---

## Property Descriptors
```javascript
const person = { name: "John" };

Object.getOwnPropertyDescriptor(person, "name");
// { value: "John", writable: true, enumerable: true, configurable: true }

Object.defineProperty(person, "age", {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: false
});
// person.age = 40; // fails silently in strict mode
```

---

## All Property Descriptors
```javascript
Object.getOwnPropertyDescriptors(user);
// Returns descriptors for all properties
```

---

## Prototypes
```javascript
function Person() {}
const p = new Person();

Object.getPrototypeOf(p); // Person.prototype
Object.setPrototypeOf(p, {}); // Change prototype
```

---

## Own Property Names & Symbols
```javascript
const sym = Symbol("id");
const objSym = { [sym]: 123, name: "Test" };

Object.getOwnPropertyNames(objSym); // ["name"]
Object.getOwnPropertySymbols(objSym); // [Symbol(id)]
Reflect.ownKeys(objSym); // ["name", Symbol(id)]
```

---

## Object Comparison
```javascript
Object.is(0, -0);      // false
Object.is(NaN, NaN);   // true
```

---

## Advanced Utilities
```javascript
// Shallow copy
const copy = Object.assign({}, user);

// Deep clone (ES structuredClone API, ES2021+)
const deepCopy = structuredClone(user);

// Convert object to entries and back
const entries = Object.entries(user);
const rebuilt = Object.fromEntries(entries);
```

---

## Notes
- Use `Object.hasOwn(obj, prop)` instead of `hasOwnProperty` to avoid prototype issues.
- `Object.freeze`, `Object.seal`, and `Object.preventExtensions` **do not deep freeze** — only affect the top level.
- `structuredClone()` is the modern built-in deep clone for simple data types.
- Symbols are not included in `Object.keys` or `Object.values`, but are included in `Reflect.ownKeys`.