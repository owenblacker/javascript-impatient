# Chapter 1, question 1

> What happens when you add `0` to the values `NaN`, `Infinity`, `false`, `true`, `null` and `undefined`? What happens when you concatenate the empty string with `NaN`, `Infinity`, `false`, `true`, `null` and `undefined`? Guess first and then try it out.

| operand | plus `0` |  | plus `''` |  |
|---------|----------|--|-----------|--|
| `NaN` | `NaN` | ✅ | `NaN` | ✅ |
| `Infinity` | `Infinity` | ✅ | `'Infinity'` | ✅ |
| `false` | `0` | ✅ | `'false'` | ✅ |
| `true` | `1` | ✅ | `'true'` | ✅ |
| `null` | `null` | ❌: `0` | `null` | ❌: `'null'` |
| `undefined` | `null` | ❌ `NaN` | `'undefined'` | ✅ |
