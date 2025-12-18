
var MyQueue = function () {
    this.stackIn = [];
    this.stackOut = []
};
MyQueue.prototype.inToOut = function () {
    if (this.stackOut.length == 0) {
        //不能用for循环，因为pop完之后stackIn的长度会变
        while (this.stackIn.length > 0) {
            this.stackOut.push(this.stackIn.pop())
        }

    }
}

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    this.inToOut();
    return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    this.inToOut();
    //只需要取值，不需要pop
    return this.stackOut[this.stackOut.length-1]

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stackIn.length == 0 && this.stackOut.length == 0

};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


var MyStack = function () {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    let n = this.queue.length;
    this.queue.push(x)
    for (let i = 0; i < n; i++) {
        this.queue.push(this.queue.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    //记得这里是return
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */