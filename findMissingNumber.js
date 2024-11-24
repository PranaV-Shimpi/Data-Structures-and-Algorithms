function findMissingNumber(arr, n) {
  let total = n * (n + 1) / 2; // Sum of first n numbers
  let sum = 0;
  for (let num of arr) {
    sum += num; // Calculate the sum of the array elements
  }
  return total - sum; // The difference gives the missing number
}

// Example:
const arr = [1, 2, 4, 5]; // Missing 3
console.log(findMissingNumber(arr, 5)); // Output: 3
