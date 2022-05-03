const square = []
const brace = {}

console.log('Literals:')

console.log(square + square) // Empty string in Node REPL, JS and Devtools
console.log(brace + square) // Empty object in Node REPL and JS; 0 in Devtools
console.log(square + brace) // Empty object in all
console.log(brace + brace) // "[object Object][object Object]" in all
console.log(square - brace) // NaN in all

const a = square + square
const b = brace + square
const c = square + brace
const d = brace + brace
const e = square - brace

console.log('\nVariables:')

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)