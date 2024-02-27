function indexOf(arr, value) {
    for (let i in arr) {
        if (arr[i] === value) return i;
    }
    return -1;
}

const array = [ 0, '1', '2', '3',];
const string = '0123';
const object = { "Zero": 0, "One": "1", "Two": "2", "Three": "3" };
const objArray = { 0: 0, 1: "1", 2: "2", 3: "3" };

console.log(" ⏩️ Array")
console.log(`>> indexOf(array, 0): ${indexOf(array, 0)}`);
console.log(`>> indexOf(array, '1'): ${indexOf(array, '1')}`);
console.log(`>> indexOf(array, 4): ${indexOf(array, 4)}`);

console.log("\n ⏩️ String")
console.log(`>> indexOf(string, 0): ${indexOf(string, 0)}`);
console.log(`>> indexOf(string, '1'): ${indexOf(string, '1')}`);
console.log(`>> indexOf(string, 4): ${indexOf(string, 4)}`);

console.log("\n ⏩️ Object")
console.log(`>> indexOf(object, 0): ${indexOf(object, 0)}`);
console.log(`>> indexOf(object, '1'): ${indexOf(object, '1')}`);
console.log(`>> indexOf(object, 4): ${indexOf(object, 4)}`);

console.log("\n ⏩️ Object array")
console.log(`>> indexOf(objArray, 0): ${indexOf(objArray, 0)}`);
console.log(`>> indexOf(objArray, '1'): ${indexOf(objArray, '1')}`);
console.log(`>> indexOf(objArray, 4): ${indexOf(objArray, 4)}`);
