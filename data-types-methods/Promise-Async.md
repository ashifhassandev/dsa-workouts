# ⏳ JavaScript Promise & Async Methods — Complete Reference (ES2022+)

This document covers **Promise**, `async/await`, and related asynchronous utilities in JavaScript.

---

## Creating Promises

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    // reject("Error occurred");
  }, 1000);
});

myPromise.then(result => console.log(result)); // "Success!"
```

---

## Promise States
- **Pending** → initial state, neither fulfilled nor rejected
- **Fulfilled** → operation completed successfully
- **Rejected** → operation failed

---

## Consuming Promises

```javascript
myPromise
  .then(value => console.log(value))        // Handle success
  .catch(error => console.error(error))     // Handle failure
  .finally(() => console.log("Done"));      // Runs regardless
```

---

## Async / Await

```javascript
async function fetchData() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Done");
  }
}

fetchData();
```

---

## Promise Utility Methods

```javascript
// Wait for all to resolve (or reject immediately)
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
]).then(values => console.log(values)); // [1, 2]

// Wait for all to settle (no early reject)
Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject("fail")
]).then(results => console.log(results));
/*
[
  { status: "fulfilled", value: "ok" },
  { status: "rejected", reason: "fail" }
]
*/

// Race: first one to settle wins
Promise.race([
  new Promise(res => setTimeout(() => res("fast"), 100)),
  new Promise(res => setTimeout(() => res("slow"), 500))
]).then(value => console.log(value)); // "fast"

// Any: first fulfilled promise wins (ignores rejections)
Promise.any([
  Promise.reject("fail"),
  Promise.resolve("success")
]).then(value => console.log(value)); // "success"
```

---

## Creating Resolved/Rejected Promises Quickly

```javascript
Promise.resolve("Instant value").then(console.log);
Promise.reject("Instant error").catch(console.error);
```

---

## Chaining Promises

```javascript
Promise.resolve(2)
  .then(num => num * 2) // 4
  .then(num => num + 1) // 5
  .then(console.log);
```

---

## Parallel vs Sequential Async Execution

```javascript
// Parallel (faster)
async function parallelExample() {
  const p1 = fetch("/api/1");
  const p2 = fetch("/api/2");
  const results = await Promise.all([p1, p2]);
}

// Sequential (slower)
async function sequentialExample() {
  const res1 = await fetch("/api/1");
  const res2 = await fetch("/api/2");
}
```

---

## Error Handling in Async

```javascript
async function example() {
  try {
    const data = await Promise.reject("Oops");
  } catch (err) {
    console.error("Caught:", err);
  }
}

example();
```

---

## Notes
- `await` works only inside `async` functions (or top-level in modern runtimes).
- Use `Promise.allSettled` when you want **all results** even if some fail.
- `Promise.any` is great when you need **only the first successful** result.
- Always `.catch()` rejections to avoid **UnhandledPromiseRejectionWarning**.