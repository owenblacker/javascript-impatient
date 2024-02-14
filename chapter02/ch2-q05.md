# Chapter 2, question 5

> Is `a || b` always the same as `a ? a : b`, no matter what type `a` and `b` are? Why or why not? Can you express `a && b` in a similar way?

As it mentions in §1.2 on page 5, JavaScript types are:

* Numbers
* Boolean values `true` and `false`
* Special values `null` and `undefined`
* Strings
* Symbols
* Objects (including arrays, in both cases a key/value map type)

The ternary operator checks for truthiness, so any value other than `0`, `NaN`, `null`, `undefined` and an empty string.

| Left \ Right | Number | `0` | `NaN` | Bool | `null` | `undefined` |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Number | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `0` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `NaN` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `true` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `false` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `null` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `undefined` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| String | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `'0'` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `'NaN'` |||| ✅ ||
| `'false'` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `'null'` |||| ✅ ||
| `'undefined'` |||| ✅ ||
| `''` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Object | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `{}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Array | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `[]` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

| Left \ Right | String | `''` | Object | `{}` | Array | `[]` |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Number | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `0` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `NaN` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `true` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `false` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `null` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `undefined` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| String | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `'0'` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `'false'` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `''` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Object | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `{}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Array | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `[]` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

Surprisingly, at least through the Node REPL, everything behaved as expected, despite that I was kinda expecting something not to, otherwise why ask…?
