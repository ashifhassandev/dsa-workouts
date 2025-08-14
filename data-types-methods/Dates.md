# 📅 JavaScript Date & Time Methods — Complete Reference (ES2022+)

This document lists all major JavaScript **Date** methods with explanations and examples.

---

## Creating Dates
```javascript
new Date();                             // Current date & time
new Date("2025-08-14");                 // From date string
new Date(2025, 7, 14);                  // Year, month (0-indexed), day → 2025-08-14
new Date(2025, 7, 14, 10, 30, 15);      // With time
new Date(1692000000000);                 // From timestamp (ms since 1970-01-01 UTC)
Date.now();                              // Current timestamp in ms
```

---

## Getting Date Components (Local Time)
```javascript
const d = new Date("2025-08-14T15:45:30");

d.getFullYear();    // 2025
d.getMonth();       // 7 (August, zero-based)
d.getDate();        // 14
d.getDay();         // 4 (Thursday, 0=Sunday)
d.getHours();       // 15
d.getMinutes();     // 45
d.getSeconds();     // 30
d.getMilliseconds();// 0
```

---

## Getting Date Components (UTC)
```javascript
d.getUTCFullYear();    // 2025
d.getUTCMonth();       // 7
d.getUTCDate();        // 14
d.getUTCDay();         // 4
d.getUTCHours();       // 13 (UTC hour)
```

---

## Setting Date Components
```javascript
d.setFullYear(2030);
d.setMonth(0);        // January
d.setDate(1);
d.setHours(12);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(500);
```

---

## Formatting Dates
```javascript
d.toString();              // "Thu Aug 14 2025 15:45:30 GMT+0000 (Coordinated Universal Time)"
d.toDateString();          // "Thu Aug 14 2025"
d.toTimeString();          // "15:45:30 GMT+0000 (Coordinated Universal Time)"
d.toUTCString();           // "Thu, 14 Aug 2025 15:45:30 GMT"
d.toISOString();           // "2025-08-14T15:45:30.000Z"
d.toLocaleDateString();    // Based on system locale
d.toLocaleTimeString();    // Based on system locale
d.toLocaleString();        // Local date + time
```

---

## Parsing Dates
```javascript
Date.parse("2025-08-14T15:45:30Z"); // 1755183930000 (timestamp in ms)
```

---

## Date Arithmetic
```javascript
const start = new Date();
const end = new Date("2025-08-20");
const diffMs = end - start;                 // Difference in ms
const diffDays = diffMs / (1000 * 60 * 60 * 24); // Difference in days

d.setDate(d.getDate() + 7); // Add 7 days
```

---

## Comparing Dates
```javascript
const d1 = new Date("2025-08-14");
const d2 = new Date("2025-08-20");

d1 < d2;  // true
d1 > d2;  // false
d1.getTime() === d2.getTime(); // false
```

---

## High-Precision Time (Performance API)
```javascript
performance.now(); // High-resolution timestamp in ms (fractional)
```

---

## Notes
- Months are **zero-based** (0 = January, 11 = December).
- `Date` stores time internally in UTC, but most getters/setters use **local time** unless using UTC methods.
- For formatting beyond `.toLocaleString()`, consider libraries like **date-fns** or **Luxon** (Moment.js is deprecated).
- Timestamps are in **milliseconds** since the Unix epoch (1970-01-01 UTC).