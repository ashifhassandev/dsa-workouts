# 📚 JavaScript String Methods — Complete Reference (ES2022+)

This document lists all major JavaScript string methods (including ES6+ and ES2022 features) with explanations and examples.

## Creating Strings
```javascript
const str1 = "Hello";           // String literal
const str2 = 'World';           // Single quotes
const str3 = `Hi ${str1}`;      // Template literal
const str4 = new String("Hey"); // String object
```

## Checking & Searching
```javascript
"JavaScript".includes("Script"); // true
"Hello World".indexOf("World");  // 6
"banana".lastIndexOf("na");      // 4
"JavaScript".startsWith("Java"); // true
"Hello.js".endsWith(".js");      // true
"Hello World".search(/world/i);  // 6
```

## Extracting Parts of a String
```javascript
"Hello World".slice(0, 5);       // "Hello"
"Hello World".substring(6, 11);  // "World"
"Hello World".substr(6, 5);      // "World" (deprecated)
"abcdef".at(-1);                 // "f" (negative index from ES2022)
```

## Modifying Strings
```javascript
"hello".toUpperCase();           // "HELLO"
"HELLO".toLowerCase();           // "hello"
"  hello  ".trim();              // "hello"
"  hello".trimStart();           // "hello"
"hello  ".trimEnd();             // "hello"
"ha".repeat(3);                  // "hahaha"
"5".padStart(3, "0");            // "005"
"5".padEnd(3, "0");              // "500"
```

## Replacing Text
```javascript
"Hello World".replace("World", "JS"); // "Hello JS"
"banana".replaceAll("a", "o");        // "bonono" (ES2021+)
```

## Splitting & Joining
```javascript
"apple,banana,cherry".split(",");  // ["apple", "banana", "cherry"]
["apple", "banana"].join(" - ");   // "apple - banana"
```

## Matching with Patterns
```javascript
"hello123".match(/\d+/);                  // ["123"]
[..."test1 test2".matchAll(/\d+/g)];      // [["1"], ["2"]]
```

## Comparing Strings
```javascript
"apple".localeCompare("banana"); // -1 (before), 1 (after), 0 (equal)
```

## Character Access
```javascript
"Hello".charAt(1);     // "e"
"ABC".charCodeAt(0);   // 65
"𐐷".codePointAt(0);   // 66615
"abcdef".at(-2);       // "e" (ES2022)
```

## Creating from Character Codes
```javascript
String.fromCharCode(65, 66, 67);  // "ABC"
String.fromCodePoint(128512);     // 😀
```

## Raw String Access
```javascript
String.raw`Hello\nWorld`; // "Hello\\nWorld"
```

## Converting to String
```javascript
(123).toString();   // "123"
String(true);       // "true"
```

## Advanced & Less Common Methods
```javascript
// Normalize Unicode strings
"\u0041\u030A".normalize("NFC"); // "Å"

// Tagged template example
function tag(strings, ...values) {
  return strings[0] + values.join("-");
}
tag`Hello ${"World"}!`; // "Hello World-!"

// Using padStart/padEnd for formatting
"7".padStart(2, "0"); // "07"
"7".padEnd(4, "x");   // "7xxx"
```

## Notes
- Strings are **immutable** — any change returns a **new string**.
- Prefer `includes` over `indexOf` for readability.
- Use `.at()` for cleaner negative index access (ES2022+).
- Use `replaceAll` for replacing all occurrences without regex (ES2021+).
- Use `.normalize()` when dealing with Unicode string comparison.