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