function indexOf(arr, value) {
    for (let i in arr) {
        console.log(`Testing index ${i}: ${arr[i]} (${typeof arr[i]}) compared with ${value} (${typeof value})`);
        if (arr[i] === value) return i;
    }
    return -1;
}

const array = [ 0, '1', '2', '3',];
const string = '0123';
const object = { "Zero": 0, "One": "1", "Two": "2", "Three": "3" };

console.log(" ⏩️ Array")
console.log(`>>\x1b[38;5;11m indexOf(array, 0): \x1b[0m${indexOf(array, 0)}`);
console.log(`>>\x1b[38;5;11m indexOf(array, '1'): \x1b[0m${indexOf(array, '1')}`);
console.log(`>>\x1b[38;5;11m indexOf(array, 4): \x1b[0m${indexOf(array, 4)}`);

console.log("\n ⏩️ String")
console.log(`>>\x1b[38;5;11m indexOf(string, 0): \x1b[0m${indexOf(string, 0)}`);
console.log(`>>\x1b[38;5;11m indexOf(string, '1'): \x1b[0m${indexOf(string, '1')}`);
console.log(`>>\x1b[38;5;11m indexOf(string, 4): \x1b[0m${indexOf(string, 4)}`);

console.log("\n ⏩️ Object")
console.log(`>>\x1b[38;5;11m indexOf(object, 0): \x1b[0m${indexOf(object, 0)}`);
console.log(`>>\x1b[38;5;11m indexOf(object, '1'): \x1b[0m${indexOf(object, '1')}`);
console.log(`>>\x1b[38;5;11m indexOf(object, 4): \x1b[0m${indexOf(object, 4)}`);
