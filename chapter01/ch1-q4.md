# Chapter 1, question 4

> Suppose `angle` is some angle in degrees that, after adding or subtrating other angels, has assumed an arbitrary value. You want to normalize it so that it is between 0 (inclusive) and 360 (exclusive). How do you do that with the `%` operator?

Node output:

```text
> 90 - 180
-90
> (90 - 180) % 360
-90
> ((90 - 180) + 360) % 360
270
```

So the solution is `(angle + 360) % 360`. Adding an extra 360° to the value doesn't change the result if we are subsequently performing _modulo 360_ but will avoid the problem of negative operands giving a negative result.
