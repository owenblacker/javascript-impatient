const [firstname, lastname] = ['Owen', 'Blacker']

const example = `Hello, ${firstname.length > 0 ? `${firstname[0]}.` : ''} ${lastname}!`

console.log(example)