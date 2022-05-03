# Chapter 1, question 6

> List as many different ways as you can to produce the string with the single character 🌐 in JavaScript.

(That character is `U+1f310 Globe with meridians`.)

```javascript
const examples = [
    '🌐',
    '\u{1f310}',
    '\ud83c\udf10',
    '\u{d83c}\u{df10}',
]

examples.forEach(element => {
    console.log(element)
})
```

Output:

```text
🌐
🌐
🌐
🌐
```
