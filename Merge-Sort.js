function mergeSort(arr) {
    // Base case: if the array has 0 or 1 elements, it's already sorted
    if (arr.length <= 1) return arr;

    // Find the middle index to split the array into two halves
    const mid = Math.floor(arr.length / 2);
    
    // Recursively sort the left half
    const left = mergeSort(arr.slice(0, mid));
    // Recursively sort the right half
    const right = mergeSort(arr.slice(mid));

    // Merge the two sorted halves and return the result
    return merge(left, right);
}

function merge(left, right) {
    // Array to hold the merged result
    const merged = [];
    
    // While both arrays have elements, compare the front elements
    while (left.length && right.length) {
        // Compare the first elements of both arrays
        // Push the smaller one to the merged array
        // Using shift() to remove and get the first element
        merged.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    // If any elements remain in the left or right array, add them to merged
    return merged.concat(left, right);
}

// Example usage
const array = [-6, 20, 8, -2, 4];
console.log(mergeSort(array)); // Output: [-6, -2, 4, 8, 20] 
