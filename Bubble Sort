// bubble sort

const bubbleSort = (arr) => {
    let swapped;

    do {
        swapped = false;       // Reset the swap flag
        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {

                // Swap using destructuring
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

                swapped = true; // Set the flag to true if a swap occurs
            }
        }
    } while (swapped); // Repeat until no swaps occur

    return arr;
}

console.log(bubbleSort([10, -6, -10, 15, 3, 7, -27])); // Output: [-27, -10, -6, 3, 7, 10, 15]
