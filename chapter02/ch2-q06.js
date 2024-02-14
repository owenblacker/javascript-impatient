const numbers = [ 1, 99, 666, -3, 0.5, 665.999, -1.5, 0 ]

let max = Number.NEGATIVE_INFINITY
for (let i = 0; i < numbers.length; i++)
{
    max = Math.max(max, numbers[i])
}
console.log(`for(i) says the max value is ${max}; expected 666.`)

max = Number.NEGATIVE_INFINITY
for (const value of numbers) {
    max = Math.max(max, value)
}
console.log(`for of says the max value is ${max}; expected 666.`)

max = Number.NEGATIVE_INFINITY
for (const iterator in numbers) {
    max = Math.max(max, numbers[iterator])
}
console.log(`for in says the max value is ${max}; expected 666.`)