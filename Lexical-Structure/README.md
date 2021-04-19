# Lexical Structure

lexical structure: the set of elementary rules that specifies how you write programs in that language (the lowest-level syntax)

- case sensitivity
  - ignore spaces, line breaks, tabs between tokens in program.
- comments `//`, `/*`+`*/`
- identifiers
  - identifier must begin with a letter, an underscore(`_`), or a dollar sign(`$`)

## Literals

```javascript
12
1.2
"hello world"
'Hi'            // another string
true
false
null            // absence of an object
```

## Optional Semicolons

you  can usually omit the semicolon between two statements if those statements are writeen on separate lines. JavaScript treats a line break as a semicolon if the next nonspace character cannot be interpreted as a continuation of the current statement.

```javascript
let a   // let a;
a
=
3       // a = 3;
consol.log(a)
```

```javascript
let y = x + f
(a+b).toString()    // let y = x + f(a+b).toString()
```

### `return`, `throw`, `yield`, `break`, and `continue`

If a line break appears after any of these words (before any other tokes),JavaScript  will always interpret that line break as a semicolon.

```javascript
return
true;   // return; true; not return true;
```

### `=>` operator

`=>` arrow itself must appear on the same line as the parameter list
