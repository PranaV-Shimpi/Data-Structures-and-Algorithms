
var MinStack = function () {
    this.st = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    let min_val = this.getMin();
    if (min_val === null || min_val > val) {
        min_val = val;
    }
    this.st.push([val, min_val]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.st.length ? this.st[this.st.length - 1][0] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.st.length ? this.st[this.st.length - 1][1] : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
