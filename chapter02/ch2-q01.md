# Chapter 2, question 1

> Browser consoles and the Node.js REPL display values when you enter statements. What values are displayed for:
>
>* An expression statement
>* A variable declaration
>* A block statement with at least one statement inside
>* An empty block statement
>* A `while`, `do` or `for` loop whose body is executed at least once
>* A loop whose body is never executed
>* An `if` statement
>* A `try` statement that completes normally
>* A `try` statement whose `catch` clause is executed

<!-- markdownlint-disable MD033 -->
| Category | Code | Chrome | Node REPL |
|----------|------|:------:|:---------:|
| Expression | `2 + 3` | `5` | `5` |
| Expression | `x = 3` | `3`  | `3` |
| Expression | `a[5] = 1` | ReferenceError | ReferenceError |
| Variable | `a = []` | `[]` | `[]` |
| Expression | `delete a` | `true` | `true` |
| Variable | `let b = 9` | `undefined` | `undefined` |
| Variable | `const c = 0` | `undefined` | `undefined` |
| Block | `{ a = 1 }` | `1` | `1` |
| Block | `{ a = 1; b = 5; }` | `5` | `5` |
| Empty block | `{};` | `undefined` | `undefined` |
| Empty block | `{ ; }` | `undefined` | `undefined` |
| Executed loop | `for (let i = 0; i < 1; i++) { console.log('looped') }` | `looped`<br>`undefined` | `looped`<br>`undefined` |
| Unexecuted loop | `while (false) { ; }` | `undefined` | `undefined` |
| Unexecuted loop | `while (false) { console.log('looped') }` | `undefined` | `undefined` |
| `if` statement | `if (true) { let a = 5; }` | `undefined` | `undefined` |
| successful `try` | `try { let a = 5; } catch { console.log('Oops') }` | `undefined` | `undefined` |
| caught `try` | `try { throw 'Nope' } catch { console.log('Oops') }` | `Oops`<br>`undefined` | `Oops`<br>`undefined` |
