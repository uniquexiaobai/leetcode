---
id: implement-stack-using-queues
title: 225. Implement Stack using Queues
---

# Implement Stack using Queues

使用队列实现栈的下列操作：

-   push(x) -- 元素 x 入栈
-   pop() -- 移除栈顶元素
-   top() -- 获取栈顶元素
-   empty() -- 返回栈是否为空

**注意:**

-   你只能使用队列的基本操作-- 也就是 `push to back`, `peek/pop from front`, `size`, 和 `is empty` 这些操作是合法的。
-   你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
-   你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。



```javascript
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.list1 = [],
    this.list2 = [];
    this.last;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.list1.push(x);
    this.last = x;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.list1.length > 2) {
        this.list2.push(this.list1.shift());
    }
    
    if (this.list1.length > 1) {
        this.last = this.list1.shift();
        this.list2.push(this.last);
    }
    
    var x = this.list1.shift();
    
    this.list1 = this.list2;
    this.list2 = [];
    
    return x;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.last;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.list1.length && !this.list2.length;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```