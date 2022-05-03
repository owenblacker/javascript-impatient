// Example from Ch1 §1.14, page 20
const melancholyMagicSquare = [
    [16, 3, 2, 13],
    [5, 10, 11, 8],
    [9, 6, 7, 12],
    [4, 15, 14, 1],
]

console.log('Just output:')
console.log(melancholyMagicSquare)
console.log('\nAnd stringified:')
console.log(JSON.stringify(melancholyMagicSquare))
console.log('\nAnd forcibly cast:')
console.log('' + melancholyMagicSquare)

const typedMagicSquare = [
    [16, 3, 2, 13],
    [5, '10', 11, 8],
    [9, 6, '7', 12],
    [4, 0xf, 14, 1],
]

console.log('\nTyped array to console:')
console.log(typedMagicSquare)
console.log('\nTyped and stringified:')
console.log(JSON.stringify(typedMagicSquare))
console.log('\nAnd forcibly cast again:')
console.log('' + typedMagicSquare)
