---
id: implement-queue-using-stacks-lcci
title: 100170. Implement Queue using Stacks LCCI
---

# Implement Queue using Stacks LCCI

实现一个MyQueue类，该类用两个栈来实现一个队列。

  


**示例：**

MyQueue queue = new MyQueue();  
  
queue.push(1);  
queue.push(2);  
queue.peek(); // 返回 1  
queue.pop(); // 返回 1  
queue.empty(); // 返回 false



  


**说明：**  


-   你只能使用标准的栈操作 -- 也就是只有 `push to top`, `peek/pop from top`, `size` 和 `is empty` 操作是合法的。
-   你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
-   假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。




```javascript
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  // stack1 用于存储入队元素，stack2 用于存储待出队元素
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  var stack1 = this.stack1, stack2 = this.stack2;

  if (stack2.length) return stack2.pop();
  if (!stack1.length) return -1;

  while (stack1.length > 1) {
    stack2.push(stack1.pop());
  }
  return stack1.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  var stack1 = this.stack1, stack2 = this.stack2;

  if (!stack2.length) {
    while (stack1.length) {
      stack2.push(stack1.pop());
    }
  }

  var value = stack2.pop();
  stack2.push(value);
  return value;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.stack2.length && !this.stack1.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```