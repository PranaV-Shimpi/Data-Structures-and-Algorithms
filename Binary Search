// Assumptions:
// The array (or list) is sorted.

// Steps:
// - Set low to 0 (the index of the first element).
// - Set high to the length of the array minus 1 (the index of the last element).

// - While low is less than or equal to high:
//   Calculate the mid index: 
//   mid = (low + high) / 2 (or low + (high - low) / 2 to avoid overflow).

// - If the element at index mid is equal to the target, return mid.
// - If the element at mid is less than the target, set low = mid + 1.
// - If the element at mid is greater than the target, set high = mid - 1.
// - If low exceeds high, return -1 (indicating the target is not found).

// Binary Search

const binarySearch = (Arr,t) => {
    
 // let arr = Arr.sort((a, b) => a - b) 
// Sort array numerically & not lexicographically( Alphabetically)

    let leftIndex = 0
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex){
        let midIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(arr[midIndex] === t){
            return midIndex;
        }
        if(arr[midIndex]<t){
            leftIndex = midIndex + 1
        }
        else{
            rightIndex = midIndex - 1;
        }
    }
    return -1;
}

let arr = [-7,-2,5,9,15,19,22];
console.log(binarySearch(arr,15))  // 4

