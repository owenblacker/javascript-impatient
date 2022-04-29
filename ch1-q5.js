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