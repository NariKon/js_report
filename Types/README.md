# Types, Values, and Variables

- primitive types
  - numbers
  - strings
  - booleans
  - null
  - `undefined`
  - Symbols (ES6)
- object types
  - object (unordered collection of named values)
  - array (ordered collection)
  - map (mapping keys tot values)
  - RegExp
  - Date
  - Error

functions and classes are a specialized kind of object.

object types are **mutable**, and primitive types are **immutable**. (it doesn't make sence that you want to change 5 itself into 6)

## JavaScript features

- Object Oriented
- Automatic garbage collection

## Numbers

JavaScript trepresents numbers using the 64-bit floating-point format.
JavaScript  supports numeric literals in several formats

### Integer

`0`, `3`, `1_000_000`

- `0xff`: 255 (hex)
- `0o377`: 255 (octal)
- `0b1111_1111`: 255  (binary)

### Floating-Point

`[digits][.digits][(E|e)[(+|-)]digits]`

- `3.14`
- `2345.6789`
- `.33333`
- `6.02e23` // 6.02 x 10^23
- `1.4738E-32`

### Arithmetic

check `arithmetic.js`

### Exceptions

- division by zero: return `Infinity` or negative `Infinity`
- zero devidec by zero: return `NaN`.

```javascript
// return Infinity
Infinity
Number.POSITIVE_INFINITY
1/0
Number.MAX_VALUE * 2

// return negative number too big to represent
-Infinity
Number.NEGATIVE_INFINITY
-1/0
-Number.MAX_VALUE * 2

// return not-a-number value
NaN
Number.NaN
0/0
Infinity/Infinity
```

`NaN` does not compare equal to any other value including itself. (`NaN === NaN` return `false`).
You must use `Number.IsNaN()`.
Other Number properties defined ES6 are in `arithmetic.js`

### Binary Floating-Point and Rounding errors

Binary floating-point representations cannot  exactly represent numbers as simple as `0.1`. (JavaScript can approximate 0.1 very closely, but the fact that this number cannot be represented exactly)

```javascript
let x = .3 - .2;
let y = .2 - .1;
x === y         // returns false
console.log(x)  // returns 0.09999999999999998
console.log(y)  // returns 0.1
```

## Dates and Times

```javascript
let timestamp = Date.now();     // 1618806676826
let now = new Date();
let ms = now.getTime();         // 1618806699727
let iso = now.toISOString();    // '2021-04-19T04:31:39.727Z'
```
