//设计循环队列
// 测试链接 : https://leetcode.cn/problems/design-circular-queue/


/**
 * @param {number} k
 */
// 应该先写isEmpty和 isFull方法
var MyCircularQueue = function (k) {
    this.l = 0;
    this.r = 0;
    //注意size和limit各自的作用
    this.size = 0;
    this.limit = k;
    this.queue = new Array(k);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false
    } else {
        this.queue[this.r] = value;
        this.r = this.r == this.limit - 1 ? 0 : this.r + 1;
        this.size++;
        return true
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false
    } else {
        this.l = this.l == this.limit - 1 ? 0 : this.l + 1;
        this.size--;
        return true;
    }

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) {
        return -1
    } else {
        return this.queue[this.l]
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) {
        return -1
    } else {
        //注意这里
        const last = this.r == 0 ? this.limit - 1 : this.r - 1
        return this.queue[last]
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.size == 0

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.size == this.limit
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */