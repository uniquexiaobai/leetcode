---
id: flatten-nested-list-iterator
title: 341. Flatten Nested List Iterator
---

# Flatten Nested List Iterator

给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。

列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。



**示例 1:**

**输入: **\[\[1,1],2,\[1,1]] **输出: **\[1,1,2,1,1] **解释: **通过重复调用 _next _直到 _hasNex_t 返回 false，_next _返回的元素的顺序应该是: `[1,1,2,1,1]`。

**示例 2:**

**输入: **\[1,\[4,\[6]]] **输出: **\[1,4,6] **解释: **通过重复调用 _next _直到 _hasNex_t 返回 false，_next _返回的元素的顺序应该是: `[1,4,6]`。



```javascript
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.list = flatten(nestedList);
    this.cur = 0;
    
    function flatten(arr) {
        var result = [];
        
        function _flatten(arr) {
            for (var i = 0; i < arr.length; i ++) {
                if (arr[i].isInteger()) {
                    result.push(arr[i].getInteger());
                } else {
                    _flatten(arr[i].getList());
                }
            }
        }
        
        _flatten(arr);
        return result;
    }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.cur < this.list.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.list[this.cur ++];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
```