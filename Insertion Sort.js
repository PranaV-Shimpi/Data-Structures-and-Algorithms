function insertionSort(arr){

    // Loop through the array starting from index 1 (first element is already "sorted")
    for(let i = 1; i < arr.length; i++){
        
        // The current element to be inserted in the sorted part of the array
        let numberToInsert = arr[i];
        
        // Start comparing with the elements before the current element (i - 1)
        let j = i - 1;

        // Shift elements in the sorted part of the array to the right
        // until we find the correct position for numberToInsert
        while (j >= 0 && arr[j] > numberToInsert){
            arr[j + 1] = arr[j]; // Move the element one position to the right
            j = j - 1; // Move to the previous element
        }

        // Insert the numberToInsert at the correct position
        arr[j + 1] = numberToInsert;
    }

    // Return the sorted array
    return arr;
}

console.log(insertionSort([-6, 20, 8, -2, 4]))  // [ -6, -2, 4, 8, 20 ]
