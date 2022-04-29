# Chapter 1, question 5

> List as many different ways as you can to produce the string with two backslash characters `\\` in JavaScript, using the mechanisms described in this chapter.

String delimiters are `'...'` and `"..."`, or ``‌`...`‌`` for a template literal. Unicode characters can be typed using `\u{00a0}`, for example; for 16-bit values, that could just be `\u00a0` and for 8-bit values `\xa0`. A backslash is Unicode character `U+005c REVERSE SOLIDUS`.

(Aside: double backticks allow the use of unescaped backticks in a Markdown code span; add a [zwnj](https://en.wikipedia.org/wiki/Zero-width_non-joiner) `U+200c` between the outer double and inner single to make it display correctly.)

Code:

```javascript
const examples = [
    '\\\\',
    "\\\\",
    `\\\\`,
    '\u{005c}\u{005c}',
    '\u005c\u005c',
    '\x5c\x5c',
]

examples.forEach(element => {
    console.log(element)
});
```

Output:

```text
\\
\\
\\
\\
\\
\\
```
