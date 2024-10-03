// cartesian product

function cartesianProduct(arr1,arr2) {
    let arr = [];
    for(i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
           arr.push([arr1[i],arr2[j]])
        }
    }
    return arr;
}

// Example usage
const array1 = [1,2];
const array2 = [3,4,5];

console.log(cartesianProduct(array1,array2)); // Output: [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]

// TC: 0(m*n) // length of array
