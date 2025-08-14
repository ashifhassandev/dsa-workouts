# 📚 JavaScript Number & Math Methods — Complete Reference (ES2022+)

This document lists all major JavaScript **Number** and **Math** methods with explanations and examples.

---

## Creating Numbers
```javascript
const n1 = 42;           // Number literal
const n2 = 3.14;         // Floating point
const n3 = 1e6;          // Scientific notation (1 × 10^6)
const n4 = new Number(7); // Number object
const n5 = 0b1010;       // Binary literal → 10
const n6 = 0o755;        // Octal literal → 493
const n7 = 0xFF;         // Hexadecimal literal → 255
```

---

## Number Checking Methods
```javascript
Number.isFinite(42);       // true
Number.isFinite(Infinity); // false

Number.isInteger(42);      // true
Number.isInteger(3.14);    // false

Number.isNaN(NaN);         // true
isNaN("hello");            // true (global isNaN converts to number)

Number.isSafeInteger(9007199254740991);  // true
Number.isSafeInteger(9007199254740992);  // false
```

---

## Parsing Strings to Numbers
```javascript
Number("42");        // 42
parseInt("42px");    // 42
parseFloat("3.14");  // 3.14

parseInt("1010", 2); // 10 (binary)
parseInt("FF", 16);  // 255 (hexadecimal)
```

---

## Number Formatting
```javascript
(1234.5678).toFixed(2);      // "1234.57" (fixed decimals)
(1234.5678).toPrecision(4);  // "1235" (total significant digits)
(255).toString(16);          // "ff" (hexadecimal)
(1000000).toExponential(2);  // "1.00e+6"
(1000).toLocaleString();     // "1,000" (based on locale)
```

---

## Number Constants
```javascript
Number.MAX_VALUE;            // Largest possible number
Number.MIN_VALUE;            // Smallest positive number
Number.MAX_SAFE_INTEGER;     // 9007199254740991
Number.MIN_SAFE_INTEGER;     // -9007199254740991
Number.POSITIVE_INFINITY;    // Infinity
Number.NEGATIVE_INFINITY;    // -Infinity
Number.NaN;                  // NaN
```

---

## Math Constants
```javascript
Math.PI;      // 3.141592653589793
Math.E;       // 2.718281828459045
Math.SQRT2;   // 1.4142135623730951
Math.LN2;     // 0.6931471805599453
```

---

## Math Rounding Methods
```javascript
Math.round(4.6);  // 5
Math.floor(4.9);  // 4
Math.ceil(4.1);   // 5
Math.trunc(4.9);  // 4 (removes decimal)
```

---

## Math Basic Operations
```javascript
Math.abs(-5);     // 5
Math.sign(-5);    // -1
Math.sign(0);     // 0
Math.sign(5);     // 1

Math.max(1, 5, 10); // 10
Math.min(1, 5, 10); // 1
```

---

## Math Power & Roots
```javascript
Math.pow(2, 3);   // 8
2 ** 3;           // 8 (exponentiation operator)

Math.sqrt(9);     // 3
Math.cbrt(27);    // 3
```

---

## Math Logarithmic & Exponential
```javascript
Math.log(1);       // 0 (natural log base e)
Math.log10(100);   // 2
Math.log2(8);      // 3
Math.exp(1);       // e^1
```

---

## Math Trigonometry
```javascript
Math.sin(Math.PI / 2);  // 1
Math.cos(0);            // 1
Math.tan(Math.PI / 4);  // 1

Math.asin(1);           // 1.5708 (π/2)
Math.acos(1);           // 0
Math.atan(1);           // 0.7854 (π/4)
```

---

## Random Numbers
```javascript
Math.random();                // Random between 0 and 1
Math.floor(Math.random() * 10); // Random integer 0-9
```

---

## BigInt (ES2020+)
```javascript
const big = 123456789012345678901234567890n;
typeof big;           // "bigint"

BigInt(42);           // 42n
big + 2n;             // BigInt addition
```

---

## Notes
- Use `Number.isFinite` and `Number.isNaN` instead of global `isFinite` / `isNaN` to avoid type coercion issues.
- BigInt is for integers only — it **cannot** be mixed with normal numbers without conversion.
- Floating-point math can be imprecise (`0.1 + 0.2 !== 0.3`).
- `Math.random()` is not cryptographically secure; use `crypto.getRandomValues` for secure randomness.