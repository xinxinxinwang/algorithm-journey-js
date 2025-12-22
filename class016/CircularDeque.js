/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    //size为初始元素的个数，应该设置为0
    this.size = 0;
    this.limit = k;
    this.left = 0;
    this.right = 0;
    this.deque = new Array(k)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    //要判断满也要判断空
    if (this.isFull()) return false;

    if (this.isEmpty()) {
        this.deque[this.left] = value;
    } else {
        // 用三元表达式赋值不要忘了赋值
        this.left = this.left === 0 ? this.limit - 1 : this.left - 1;
        this.deque[this.left] = value;
    }
    this.size++;
    return true;

};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) return false;

    if (this.isEmpty()) {
        this.deque[this.right] = value;
    } else {
        this.right = this.right === this.limit - 1 ? 0 : this.right + 1;
        this.deque[this.right] = value;
    }
    this.size++;
    return true;

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) return false;

    this.left = this.left === this.limit - 1 ? 0 : this.left + 1;
    this.size--;

    // 删除最后一个元素时，重置指针为同一位置
    if (this.size === 0) {
        this.left = this.right = 0;
    }
    return true;

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) return false;

    this.right = this.right === 0 ? this.limit - 1 : this.right - 1;
    this.size--;

    // 删除最后一个元素时，重置指针为同一位置
    if (this.size === 0) {
        this.left = this.right = 0;
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.isEmpty()) {
        return -1;
    } else {
        return this.deque[this.left]
    }
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.isEmpty()) {
        return -1;
    } else {
        return this.deque[this.right]
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.size == 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.size == this.limit;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */