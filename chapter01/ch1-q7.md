# Chapter 1, question 7

> Give a realistic example in which a template string has an embedded expression that contains another template string with an embedded expression.

```javascript
const [firstname, lastname] = ['Owen', 'Blacker']

const example = `Hello, ${firstname.length > 0 ? `${firstname[0]}.` : ''} ${lastname}!`

console.log(example)
```

Output:

```text
Hello, O. Blacker!
```