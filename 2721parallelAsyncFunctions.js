var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    let hasRejected = false;

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then(result => {
          if (hasRejected) return; // If already rejected, we do nothing

          results[i] = result; // Store the result in the same order
          completed++;

          // If all promises have been resolved
          if (completed === functions.length) {
            resolve(results);
          }
        })
        .catch(error => {
          if (!hasRejected) {
            hasRejected = true;
            reject(error); // Reject with the first error
          }
        });
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]
// Output: {"t": 150, "resolved": [4, 10, 16]}
// Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.
