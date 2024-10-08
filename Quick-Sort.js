const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([-6, 20, 8, -2, 4])); // [ -6, -2, 4, 8, 20 ]

// Avg case : 0(nlong(n))
// Worst case : In case of sorted array 0(n^2)
