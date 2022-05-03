# Chapter 1, question 8

> Give three ways of producing an array with a “hole” in the index sequence.

```javascript
const one = ['first',,'third']

const two = ['first','second']
two[4] = 'fifth'

const three = ['first', 'second']
three.length = 5
three[three.length] = 'sixth'
three.push('seventh')

console.log(one)
console.log(two)
console.log(three)
```

Output:

```text
[ 'first', <1 empty item>, 'third' ]
[ 'first', 'second', <2 empty items>, 'fifth' ]
[ 'first', 'second', <3 empty items>, 'sixth', 'seventh' ]
```
