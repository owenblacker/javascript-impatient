# Chapter 1, question 3

>As in Java and C++ (and unlike Python which follows many centuries of mathematical experience), `n % 2` is `-1` if `n` is a negative integer. Explore the behavior of the `%` operator for negative operands. Analyze integers and floating point numbers.

Node output:

```text
> 0 % 2
0
> -0 % 2
-0
> 0.0 % 2
0
> -0.0 % 2
-0
> 0.5 % 2
0.5
> 25.5 % 2
1.5
> 24.5 % 2
0.5
> -25.5 % 2
-1.5
> -24.5 % 2
-0.5
> 25 % 2
1
> -25 % 5
-0
> -25 % 2
-1
> -24 % 2
-0
```

As described in the book (page 25), negative operands give a negative result and (page 10):

> If `k` and `n` are positive values, possibly fractional, then `k % n` is the value that is obtained by subtracting `n` from `k` until the result is less than `n`. For example, `3.5 % 1.2` is `1.1`, the result of subtracting `1.2` twice.
