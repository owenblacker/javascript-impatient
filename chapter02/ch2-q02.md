# Chapter 2, question 2

> What is wrong with the statement
>
> ```javascript
>     if (x === 0) console.log('zero') else console.log('nonzero')
> ```
>
> ?

```text
> if (x === 0) console.log('zero') else console.log('nonzero')
if (x === 0) console.log('zero') else console.log('nonzero')
                                 ^^^^

Uncaught SyntaxError: Unexpected token 'else'
> if (x === 0) console.log('zero'); else console.log ('nonzero')
nonzero
undefined
>
```

As the boxout on page 33 describes:

> Some JavaScript consoles analyze the code one line at a time. Such a console will think that the `if` statement is complete before the `else` clause.

The semicolon prevents that, just as braces would have done. (Another reason always to use braces and semicolons, like C#’s preferred style, if you ask me 😉)
