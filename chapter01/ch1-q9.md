# Chapter 1, question 9

> Declare an array with elements at index positions `0`, `0.5`, `1`, `1.5`, and `2`.

```javascript
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
```

Output:

```text
for ... in
0: zero
1: one
2: two
0.5: a half
1.5: one-and-a-half

for (i)
0: zero
0.5: a half
1: one
1.5: one-and-a-half
2: two
```
