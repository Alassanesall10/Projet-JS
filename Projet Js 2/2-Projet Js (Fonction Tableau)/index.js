let arr = [ 13, 6, 3, 8, 5, 84, 35 ];

let min = arr[ 0 ];
let max = 0;
let len = arr.length;

for ( let i = 0; i < len - 1; i++ ){
    if ( min > arr[ i ] ) {
        min = arr [ i ];
    }
    if ( max < arr[ i ] ) {
        max = arr[ i ];
    }
    min;
    max;
}

console.log("Minimum value in array is : " + min );
console.log("Maximum value in array is : " + max );


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
    }
    return sum;
}

const array = [ 2, 8, 5, 9, 1, 27];
console.log(sumArray(array));



function filterArray(arr, condition) {
    let filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i], i, arr)) {
            filteredArray.push(arr[i]);

    }
}

return filteredArray

}

let numbers = [5, 7, 3, 8, 10, 2, 23, 84];
let filteredNumbers = filterArray(numbers, num => num > 5);
console.log(filteredNumbers);