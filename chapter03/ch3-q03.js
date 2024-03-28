function values(f, low, high) {

    let list = [];
    for (let i = low; i <= high; i++) {
        list.push(i);
    }

    return list.map(f);
}

console.log("Examples of function values(f, low, high)");
console.log("f = x => x + 1, low = 0, high = 9", values(x => x + 1, 0, 9));
console.log("f = x => x / 2, low = 0, high = 9", values(x => x / 2, 0, 9));
console.log("f = x => -x, low = 0, high = 9", values(x => -x, 0, 9));
console.log("f = x => x * x, low = 0, high = 9", values(x => x * x, 0, 9));
console.log("f = Math.sqrt, low = 0, high = 9", values(Math.sqrt, 0, 9));
console.log("f = function(x) { return x*x*x;}, low = 0, high = 9", values(function(x) { return x*x*x;}, 0, 9));
console.log("f = Math.sqrt, low = 23, high = 45",
values(Math.sqrt, 23, 45));