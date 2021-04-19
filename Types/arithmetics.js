let x = 30
let y = 40
let z = 50

Math.pow(2, 53) // => 9007199254740992
Math.round(.6)
Math.ceil(.6) // 1.0
Math.floor(.6) // 0.0
Math.abs(-5)
Math.max(x, y, z)
Math.min(x, y, z)
Math.random() // Pseudo-random number (0 <= x <= 1.0)
Math.sqrt(3)
Math.cbrt(27) // ES6: cube root
Math.hytpot(3, 4) // ES6: pythagorean 5 (√(3**2 + 4**2))
Math.log(10) // Natural logarithm of 10
Math.log10(100) // Base-10 logarithm
Math.log2(1024) // Base-2 logarithm
Math.exp(3)
let pi = Math.PI
let napier = Math.E
Math.trunc(3.9) // convert to an integer by truncating fractionial part
Math.imul(2, 3) // 6 optimized multiplication of 32-bit integers

// ES6 Parse or validate methods
Number.parseInt() // same as parseInt()
Number.parseFloat() // same as parseFloat()
Number.isNaN(x)
Number.isFinite(x)
Number.isInteger(x)
Number.isSafeInteger(x)
let pos_inf = Number.POSITIVE_INFINITY
let neg_inf = Number.NEGATIVE_INFINITY
let min_safe = Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
let max_safe = Number.MAX_SAFE_INTEGER // => 2**53 - 1
let epsilon = Number.EPSILON // => 2**-52