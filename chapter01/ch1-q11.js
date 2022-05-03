const harry = { name: 'Harry' }
const sally = { name: 'Sally' }

console.log('Harry, bare log:')
console.log(harry)
console.log('\nHarry, stringified:')
console.log(JSON.stringify(harry))

console.log('\nSally, bare log:')
console.log(sally)
console.log('\nSally, stringified:')
console.log(JSON.stringify(sally))

harry.friends = [sally,]

console.log('\n\nHarry with a friend, bare:')
console.log(harry)
console.log('\nHarry with a friend, stringified:')
console.log(JSON.stringify(harry))

sally.friends = [harry,]

console.log('\n\nNow they’re both friends-linked')

console.log('\nHarry, bare log:')
console.log(harry)
console.log('\nHarry, stringified:')
console.log(JSON.stringify(harry))

// console.log('\nSally, bare log:')
// console.log(sally)
// console.log('\nSally, stringified:')
// console.log(JSON.stringify(sally))