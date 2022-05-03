const myArray = [
    'zero',
    'one',
    'two'
]
myArray['0.5'] = 'a half' // string key
myArray[1.5] = 'one-and-a-half' // number key is autoconverted to a string

console.log('for ... in') // insert order
for (const index in myArray)
{
    console.log(`${index}: ${myArray[index]}`)
}

console.log('\nfor (i)') // key order
for (let i = 0; i <= 2; i += 0.5)
{
    console.log(`${i}: ${myArray[i]}`)
}