// 测试链接 : https://leetcode.cn/problems/min-stack/
var MinStack1 = function () {
    this.min = []
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack1.prototype.push = function (val) {
    this.stack.push(val)
    //注意val是和min的栈顶比较
    if (this.min.length == 0 || val < this.min[this.min.length - 1]) {
        this.min.push(val)
    } else {
        //压入this.min[this.min.length-1]
        this.min.push(this.min[this.min.length - 1])
    }
};

/**
 * @return {void}
 */
MinStack1.prototype.pop = function () {
    this.stack.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack1.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack1.prototype.getMin = function () {
    return this.min[this.min.length - 1]

};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//更优解
// 测试链接 : https://leetcode.cn/problems/min-stack/
var MinStack = function () {
    this.min = []
    this.stack = []
    this.size = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack[this.size] = val;
    if (this.size == 0) {
        this.min[this.size] = val
    } else {
        //注意是比较val 和 this.min[this.size-1]
        this.min[this.size] = Math.min(val, this.min[this.size - 1])
    }
    //要记得更新size
    this.size++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    //空栈不操作
    if (this.size == 0) return
    this.size--
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    // 下标是this.size-1
    return this.stack[this.size - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    // 下标是this.size-1
    return this.min[this.size - 1]

};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */